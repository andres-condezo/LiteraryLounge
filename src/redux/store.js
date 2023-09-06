import { configureStore } from '@reduxjs/toolkit';
import booksReducer, { fetchAllBooks } from './booksSlice';
import listBtnReducer from './listBtnSlice';
import listAsideReducer from './listAsideSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    listBtn: listBtnReducer,
    listAside: listAsideReducer,
  },
});

store.dispatch(fetchAllBooks());

export default store;
