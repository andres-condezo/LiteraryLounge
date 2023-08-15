import PropTypes from 'prop-types';
import Btn from './btn';

const BookListCard = ({ book }) => {
  const {
    id, cover, title, author, onReadList,
  } = book;

  return (
    <article>
      <picture>
        <img
          src={cover}
          alt={title}
          className={`${onReadList ? 'img--reserved' : ''}`}
        />
      </picture>
      <div className="card-info">
        <h4>{title}</h4>
        <p>{author.name}</p>
      </div>
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
