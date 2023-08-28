import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loadState } from '../logic/localStorage';

const ReadingList = loadState();

// Funciones asíncronas como consultas a la API (puede estar en cualquier otro archivo)
export const fetchAllBooks = createAsyncThunk('books/fetchAllBooks', () =>
  fetch('books.json')
    .then((response) => response.json())
    .then((data) => data.library)
    .catch((error) => error),
);

// Store Slices
const BookSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
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
  extraReducers(builder) {
    builder.addCase(fetchAllBooks.fulfilled, (state, action) => {
      // normalize fetched data
      const newBookList = [];
      action.payload.forEach((book) => {
        let isOnReadList = false;
        const found = ReadingList.find((b) => b.bookId === book.book.id);
        if (found) isOnReadList = true;
        newBookList.push({ ...book.book, onReadList: isOnReadList });
      });
      // Add any fetched books to the array
      return newBookList;
    });
  },
});

export const { addBook, removeBook } = BookSlice.actions;
export default BookSlice.reducer;
