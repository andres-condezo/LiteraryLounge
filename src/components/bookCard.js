import PropTypes from 'prop-types';
import AddRemoveBookBtn from './addRemoveBookBtn';
import CardPriority from './cardPriority';

const BookCard = ({
  book: {
    id, cover, title, author, onReadList,
  }, availableBook, sortReadingList,
}) => {
  const handleClick = () => { console.log('clicked'); };

  return (
    <article className="book-card">
      <button
        className={`btn-modal ${onReadList ? 'btn-modal--reserved' : ''}`}
        type="button"
        onClick={handleClick}
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
    onReadList: PropTypes.bool.isRequired,
  }).isRequired,
  availableBook: PropTypes.bool.isRequired,
  sortReadingList: PropTypes.func,
};

export default BookCard;
