import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addBook } from '../redux/booksSlice';
import library from '../data/books.json';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addBook(library));
  }, []);

  const books = useSelector((state) => state.books);
  console.log('💬 :home.js:Home:14:', books);

  return (
    <div>
      <ul>
        {/*
          <li>{books[0].title}</li>
        */}
        <li>{JSON.stringify(books[0])}</li>
      </ul>
    </div>
  );
}

export default Home;
