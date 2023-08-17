import { configureStore } from '@reduxjs/toolkit';
import booksReducer, { fetchAllBooks } from './booksSlice';
import listBtnReducer from './listBtnSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    listBtn: listBtnReducer,
  },
});

store.dispatch(fetchAllBooks());

export default store;
