import PropTypes from 'prop-types';
import Btn from './btn';

const BookListCard = ({
  book: {
    id, cover, title, author, onReadList,
  },
}) => {
  const handleClick = () => { console.log('clicked'); };

  return (
    <article className="book-list-card">
      <button
        className={`btn-modal ${onReadList ? 'btn-modal--reserved' : ''}`}
        type="button"
        onClick={handleClick}
      >
        <picture>
          <img
            src={cover}
            alt={title}
          />
        </picture>
        <div className="card-info">
          <h4>{title}</h4>
          <p>{author.name}</p>
        </div>
      </button>
      <Btn id={id} onReadList={onReadList} />
    </article>
  );
};

BookListCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    onReadList: PropTypes.bool.isRequired,
  }).isRequired,
};
export default BookListCard;
