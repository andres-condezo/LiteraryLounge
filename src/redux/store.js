import { configureStore } from '@reduxjs/toolkit';
import booksReducer, { getBooks } from './booksSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

store.dispatch(getBooks());
export default store;
