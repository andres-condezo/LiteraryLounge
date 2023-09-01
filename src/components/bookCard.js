import PropTypes from 'prop-types';
import { useState } from 'react';
import { BiSolidBookmark } from 'react-icons/bi';
import CardPriority from './cardPriority';
import useBook from '../hooks/useBook';
import BookModal from './bookModal';

const BookCard = ({
  book: {
    id,
    cover,
    title,
    author,
    synopsis,
    year,
    pages,
    genre,
    ISBN,
    onReadList,
  },
  availableBook,
  sortReadingList,
}) => {
  const [modalState, setModalState] = useState(false);
  const { handleAddBook, handleRemoveBook } = useBook(onReadList);

  const dragStart = (e) => {
    const bookId = e.target.id;
    if (availableBook) handleAddBook(bookId);
    else handleRemoveBook(bookId);
  };

  return (
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
      <BiSolidBookmark
        type="button"
        id={id}
        aria-label={`${onReadList ? 'Remove' : 'Add'} book`}
        className={`btn-icon ${onReadList ? 'btn-icon--reserved' : ''}`}
        onClick={(e) => (onReadList
          ? handleRemoveBook(e.target.parentNode.id)
          : handleAddBook(e.target.parentNode.id))}
      />
      <div className="card-footer">
        <p>{genre}</p>
        <div>
          <span>Pag:&nbsp;</span>
          <span>{pages}</span>
        </div>
      </div>
      <BookModal
        book={{
          cover,
          title,
          author,
          synopsis,
          year,
          pages,
          genre,
          ISBN,
        }}
        modalState={modalState}
        setModalState={setModalState}
      />
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
