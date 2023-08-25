import PropTypes from 'prop-types';
import { useState } from 'react';
import AddRemoveBookBtn from './addRemoveBookBtn';
import CardPriority from './cardPriority';
import Modal from './modal';

const BookCard = ({
  book: {
    id, cover, title, author, synopsis, year, pages, genre, ISBN, onReadList,
  }, availableBook, sortReadingList,
}) => {
  const [modalState, setModalState] = useState(false);

  return (
    <article className="book-card">
      <button
        className={`btn-modal ${onReadList ? 'btn-modal--reserved' : ''}`}
        type="button"
        onClick={() => { setModalState(!modalState); }}
      >
        <picture>
          <AddRemoveBookBtn
            as="img"
            id={id}
            onReadList={onReadList}
            src={cover}
            alt={title}
            availableBook={availableBook}
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
      <AddRemoveBookBtn
        as="button"
        id={id}
        onReadList={onReadList}
      />
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
