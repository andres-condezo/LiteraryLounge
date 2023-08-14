import { createSlice } from '@reduxjs/toolkit';
import { saveState, loadState } from '../logic/localStorage';
import books from '../data/books.json';

const BookSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    getBooks: (state, _action) => {
      console.log('💬 :booksSlice.js:::10:', _action);
      const newInitialState = [];
      const readingList = loadState();
      books.library.forEach((book) => {
        const isOnReadList = readingList.includes(book.book.id);
        newInitialState.push({ ...book.book, onReadList: isOnReadList });
      });
      saveState(state);
      return newInitialState;
    },
  },
});

export const { getBooks } = BookSlice.actions;
export default BookSlice.reducer;
