import { PropTypes } from 'prop-types';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import BookListHeader from './bookListHeader';
import BookListCard from './bookListCard';
import { getFilteredBooks } from '../logic/getFilters';

const BookList = ({ filters }) => {
  const [filteredBookList, setFilteredBookList] = useState([]);
  const bookList = useSelector((state) => state.books);

  useEffect(() => {
    setFilteredBookList(getFilteredBooks(filters.title, filters.genre, filters.pages));
  }, [bookList, filters]);

  const draggingOver = (e) => {
    e.preventDefault();
  };

  return (
    <section className="book-list">
      <BookListHeader bookArray={filteredBookList} />
      <div className="books-container" onDragOver={draggingOver}>
        {
          filteredBookList && filteredBookList.map((book) => (
            <BookListCard
              key={book.id}
              book={book}
              availableBook
            />
          ))
        }
      </div>
    </section>
  );
};

BookList.propTypes = {
  filters: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    pages: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
};

export default BookList;
