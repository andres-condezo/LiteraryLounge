import { createSlice } from '@reduxjs/toolkit';
import { loadState } from '../logic/localStorage';
import books from '../data/books.json';

const BookSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    getBooks: () => {
      const newInitialState = [];
      const readingList = loadState();
      books.library.forEach((book) => {
        const isOnReadList = readingList.includes(book.book.id);
        newInitialState.push({ ...book.book, onReadList: isOnReadList });
      });
      return newInitialState;
    },
    addBook: (state, action) => {
      const id = action.payload;
      const newInitialState = state.map((book) => {
        if (book.id !== id) return book;
        return { ...book, onReadList: true };
      });
      return newInitialState;
    },
    removeBook: (state, action) => {
      const id = action.payload;
      const newInitialState = state.map((book) => {
        if (book.id !== id) return book;
        return { ...book, onReadList: false };
      });
      return newInitialState;
    },
  },
});

export const { getBooks, addBook, removeBook } = BookSlice.actions;
export default BookSlice.reducer;
