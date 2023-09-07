import { PropTypes } from 'prop-types';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import BookListHeader from './bookListHeader';
import BookCard from './bookCard';
import Paginator from './Paginator';
import { getFilteredBooks } from '../logic/getFilters';

const BookList = ({ filters }) => {
  const maxPageItems = 10;
  const [filteredBookList, setFilteredBookList] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [rangeCount, setRangeCount] = useState([0, maxPageItems]);
  const bookList = useSelector((state) => state.books);

  useEffect(() => {
    setFilteredBookList(
      getFilteredBooks(filters.title, filters.genre, filters.pages),
    );
  }, [bookList, filters]);

  const draggingOver = (e) => {
    e.preventDefault();
  };

  const paginatorHandler = (newActivePage) => {
    const page = parseInt(newActivePage, 10);
    const range = [maxPageItems * (page - 1), maxPageItems * page];
    setRangeCount(range);
    setActivePage(page);
  };

  return (
    <section className="book-list">
      <BookListHeader filteredBookList={filteredBookList} />
      <div className="books-container" onDragOver={draggingOver}>
        {filteredBookList
          && filteredBookList.slice(rangeCount[0], rangeCount[1]).map((book) => (
            <BookCard key={book.id} book={book} availableBook />
          ))}
      </div>
      {
        filteredBookList
        && filteredBookList.length > maxPageItems && (
          <Paginator
            numPages={Math.ceil(filteredBookList.length / maxPageItems)}
            activePage={activePage}
            paginatorHandler={paginatorHandler}
          />
        )
      }
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
