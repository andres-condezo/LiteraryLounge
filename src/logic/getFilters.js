import store from '../redux/store';

// FILTERS
const getFilteredBooks = (title, genre, pages) => {
  const { books } = store.getState();
  const existRange = pages.length === 2;
  if (title === '' && genre === '' && !existRange) return books;

  const filteredList = books.filter((book) => {
    if (title !== '' && genre !== '' && existRange) return book.title.toLowerCase().includes(title) && book.genre === genre && book.pages >= pages[0] && book.pages <= pages[1];

    if (title !== '' && genre !== '') return book.title.toLowerCase().includes(title) && book.genre === genre;

    if (title !== '' && existRange) return book.title.toLowerCase().includes(title) && book.pages >= pages[0] && book.pages <= pages[1];

    if (genre !== '' && existRange) return book.genre === genre && book.pages >= pages[0] && book.pages <= pages[1];

    if (title !== '') return book.title.toLowerCase().includes(title);

    if (genre !== '') return book.genre === genre;

    return book.pages >= pages[0] && book.pages <= pages[1];
  });
  return filteredList;
};

export default getFilteredBooks;
