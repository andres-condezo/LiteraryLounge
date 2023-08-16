import { PropTypes } from 'prop-types';
import BookListHeader from './bookListHeader';
import BookListCard from './bookListCard';

const BookList = ({ bookArray }) => (
  <section className="book-list">
    <BookListHeader bookArray={bookArray} />
    <div className="books-container">
      {
        bookArray && bookArray.map((book) => (
          <BookListCard key={book.id} book={book} />
        ))
      }
    </div>
  </section>
);

BookList.propTypes = {
  bookArray: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
};

export default BookList;
