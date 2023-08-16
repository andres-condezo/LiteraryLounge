import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import FilterAside from './FilterAside';
import BookList from './booksList';
import getFilteredBooks from '../logic/getFilters';

const Main = () => {
  const [bookArray, setBookArray] = useState([]);
  const bookList = useSelector((state) => state.books);

  const filterHandler = (title = '', genre = '', pages = []) => {
    setBookArray(getFilteredBooks(title, genre, pages));
  };

  useEffect(() => {
    setBookArray(bookList);
  }, [bookList]);

  return (
    <main>
      <FilterAside filterHandler={filterHandler} />
      <BookList bookArray={bookArray} />
    </main>
  );
};

export default Main;
