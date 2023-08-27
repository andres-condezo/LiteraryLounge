import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BiSolidBookmark } from 'react-icons/bi';
import { loadState, saveState } from '../logic/localStorage';
import { setAnimated, resetAnimated } from '../redux/listBtnSlice';
import { addBook, removeBook } from '../redux/booksSlice';
import CardPriority from './cardPriority';
import Modal from './modal';

const BookCard = ({
  book: {
    id, cover, title, author, synopsis, year, pages, genre, ISBN, onReadList,
  }, availableBook, sortReadingList,
}) => {
  const [modalState, setModalState] = useState(false);

  const dispatch = useDispatch();

  const handleAddBook = (e) => {
    const bookId = Number(e.target.id);
    let readingList = loadState();
    if (!onReadList) {
      dispatch(addBook(bookId));
      readingList = [...readingList, { bookId, priority: 1 }];
      readingList.sort((x, y) => y.priority - x.priority);
      saveState(readingList);
    }
    dispatch(setAnimated());
    setTimeout(() => {
      dispatch(resetAnimated());
    }, 500);
  };

  const handleRemoveBook = (e) => {
    const bookId = Number(e.target.id);
    dispatch(removeBook(bookId));
    let readingList = loadState();
    readingList = readingList.filter((item) => item.bookId !== bookId);
    saveState(readingList);
  };

  const dragStart = (e) => {
    if (availableBook) handleAddBook(e);
    else handleRemoveBook(e);
  };

  return (
    <article className="book-card">
      <button
        className={`btn-modal ${onReadList ? 'btn-modal--reserved' : ''}`}
        type="button"
        onClick={() => { setModalState(!modalState); }}
      >
        <picture>
          <img
            id={id}
            draggable
            onDragStart={dragStart}
            src={cover}
            alt={title}
          />
        </picture>
        <div className="card-info">
          <h4>{title}</h4>
          <p>{author.name}</p>
        </div>
      </button>
      <CardPriority
        id={id}
        availableBook={availableBook}
        sortReadingList={sortReadingList}
      />
      <button
        type="button"
        id={id}
        aria-label={`${onReadList ? 'Remove' : 'Add'} book`}
        className={`btn add-btn ${onReadList
          ? 'add-btn--reserved'
          : 'add-btn--not-reserved'}`}
        onClick={(e) => (onReadList ? handleRemoveBook(e) : handleAddBook(e))}
      >
        <BiSolidBookmark
          onClick={(e) => (onReadList ? handleRemoveBook(e) : handleAddBook(e))}
        />
      </button>
      <Modal modalState={modalState} setModalState={setModalState}>
        <div className="modal__main">
          <picture>
            <img src={cover} alt={title} />
          </picture>
          <div className="modal__info">
            <h4>{title}</h4>
            <h5>{author.name}</h5>
            <p>
              <b>Genre:&nbsp;</b>
              {genre}
            </p>
            <p>
              <b>Year:&nbsp;</b>
              {year}
            </p>
            <p>
              <b>Pages:&nbsp;</b>
              {pages}
            </p>
            <p>
              <b>ISBN:&nbsp;</b>
              {ISBN}
            </p>
            <p className="modal__info--p">
              <b>Synopsis:&nbsp;</b>
              {synopsis}
            </p>
          </div>
        </div>
      </Modal>
    </article>
  );
};

BookCard.defaultProps = {
  sortReadingList: () => true,
};

BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    synopsis: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    pages: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    ISBN: PropTypes.string.isRequired,
    onReadList: PropTypes.bool.isRequired,
  }).isRequired,
  availableBook: PropTypes.bool.isRequired,
  sortReadingList: PropTypes.func,
};

export default BookCard;
