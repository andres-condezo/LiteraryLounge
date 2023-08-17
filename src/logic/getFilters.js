import store from '../redux/store';
import { loadState } from './localStorage';

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

const getReadingBooks = () => {
  const { books } = store.getState();
  const filteredList = books.filter((book) => book.onReadList);
  const ReadingList = loadState();
  const sorteredList = [];
  ReadingList.forEach((element) => {
    const book = filteredList.find((e) => e.id === element.bookId);
    if (book) sorteredList.push(book);
  });
  return sorteredList;
};

export { getFilteredBooks, getReadingBooks };
