import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import FilterAside from './FilterAside';
import BookList from './booksList';
import getFilteredBooks from '../logic/getFilters';

const Main = () => {
  const [listaLibros, setListaLibros] = useState([]);
  // console.log('---------------LISTA LIBROS------------------');
  // console.log(listaLibros);
  const bookList = useSelector((state) => state.books);

  const filterHandler = (title = '', genre = '', pages = []) => {
    setListaLibros(getFilteredBooks(title, genre, pages));
  };

  useEffect(() => {
    setListaLibros(bookList);
  }, [bookList]);

  return (
    <main>
      <FilterAside filterHandler={filterHandler} />
      <BookList listaLibros={listaLibros} />
    </main>
  );
};

export default Main;
