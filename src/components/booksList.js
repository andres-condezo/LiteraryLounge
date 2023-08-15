import { PropTypes } from 'prop-types';
import BookListHeader from './bookListHeder';
import BookListCard from './bookListCard';

const BookList = ({ listaLibros }) => (
  <section className="book-list">
    <BookListHeader />
    <div className="books-container">
      {
          listaLibros && listaLibros.map((book) => (
            <BookListCard key={book.id} book={book} />
          ))
        }
    </div>
  </section>
);

BookList.propTypes = {
  listaLibros: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
};

export default BookList;
