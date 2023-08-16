import { useState } from 'react';
import FilterAside from './FilterAside';
import BookList from './bookList';

const Main = () => {
  const [filters, setFilters] = useState({ title: '', genre: '', pages: [] });

  const filterHandler = (title = '', genre = '', pages = []) => {
    setFilters({ title, genre, pages });
  };

  return (
    <main>
      <FilterAside filterHandler={filterHandler} />
      <BookList filters={filters} />
    </main>
  );
};

export default Main;
