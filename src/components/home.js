import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBooks } from '../redux/booksSlice';
import bookObject from '../data/books.json';

function Home() {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks(bookObject));
  }, []);

  return (
    <div>
      <ul>
        {books && books.map((book) => <li key={book.title}>{book.title}</li>)}
      </ul>
    </div>
  );
}

export default Home;
