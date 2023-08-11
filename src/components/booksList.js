import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBooks } from '../redux/booksSlice';
import bookObject from '../data/books.json';

const BooksList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks(bookObject));
  }, []);

  return (
    <div>{JSON.stringify(books)}</div>
  );
};

export default BooksList;
