import { configureStore } from '@reduxjs/toolkit';
import booksReducer, { fetchAllBooks } from './booksSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

store.dispatch(fetchAllBooks());

export default store;
