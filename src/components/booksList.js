import { PropTypes } from 'prop-types';

const BooksList = ({ listaLibros }) => (
  <div className="book__list">{JSON.stringify(listaLibros)}</div>
);

BooksList.propTypes = {
  listaLibros: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
};

export default BooksList;
