import store from '../redux/store';

// FILTERS
const getFilteredBooks = (title, genre, pages) => {
  console.log(pages);
  const { books } = store.getState();
  if (title === '' && genre === '') return books;

  const filteredList = books.filter((book) => {
    if (title !== '' && genre !== '') return book.title.toLowerCase().includes(title) && book.genre === genre;

    if (title === '') return book.genre === genre;

    return book.title.toLowerCase().includes(title);
  });
  console.log(filteredList);
  return filteredList;
};

export default getFilteredBooks;
