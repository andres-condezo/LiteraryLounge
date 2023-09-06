import PropTypes from 'prop-types';
import { useState } from 'react';
import { BiSolidBookmark } from 'react-icons/bi';
import CardPriority from './cardPriority';
import useBook from '../hooks/useBook';
import BookModal from './bookModal';

const BookCard = ({ book, availableBook, sortReadingList }) => {
  const {
    id, cover, title, author, onReadList,
  } = book;
  const [modalState, setModalState] = useState(false);
  const { handleAddBook, handleRemoveBook } = useBook(onReadList);

  const dragStart = (e) => {
    const bookId = e.target.id;
    if (availableBook) handleAddBook(bookId);
    else handleRemoveBook(bookId);
  };

  return (
    <>
      <article className="book-card">
        <button
          className={`btn-modal ${onReadList ? 'btn-modal--reserved' : ''}`}
          type="button"
          onClick={() => {
            setModalState(!modalState);
          }}
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
        <div className="btn-tip">
          <BiSolidBookmark
            type="button"
            id={id}
            aria-label={`${onReadList ? 'Remove' : 'Add'} book`}
            className={`btn-icon ${onReadList ? 'btn-icon--reserved' : ''}`}
            onClick={(e) => (onReadList
              ? handleRemoveBook(e.target.parentNode.id)
              : handleAddBook(e.target.parentNode.id))}
          />
          <span>{onReadList ? 'Remove book' : 'Add book'}</span>
        </div>
      </article>
      <BookModal
        book={book}
        modalState={modalState}
        setModalState={setModalState}
      />
    </>
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
    onReadList: PropTypes.bool.isRequired,
  }).isRequired,
  availableBook: PropTypes.bool.isRequired,
  sortReadingList: PropTypes.func,
};

export default BookCard;
