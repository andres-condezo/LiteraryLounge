import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import FilterAside from './FilterAside';
import BooksList from './booksList';
import getFilteredBooks from '../logic/getFilters';

const Main = () => {
  const [listaLibros, setListaLibros] = useState([]);
  // console.log('---------------LISTA LIBROS------------------');
  // console.log(listaLibros);
  const bookList = useSelector((state) => state.books);

  const filterHandler = (title = '', genre = '', maxPages = 1000) => {
    setListaLibros(getFilteredBooks(title, genre, maxPages));
  };

  useEffect(() => {
    setListaLibros(bookList);
  }, [bookList]);

  return (
    <main>
      <FilterAside filterHandler={filterHandler} />
      <BooksList listaLibros={listaLibros} />
    </main>
  );
};

export default Main;
