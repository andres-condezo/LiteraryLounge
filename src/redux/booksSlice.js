import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loadState } from '../logic/localStorage';

const ReadingList = loadState();

// Funciones asíncronas como consultas a la API (puede estar en cualquier otro archivo)
export const fetchAllBooks = createAsyncThunk('books/fetchAllBooks', () => (
  fetch('books.json')
    .then((response) => response.json())
    .then((data) => data.library)
    .catch((error) => error)
));

// Store Slices
const BookSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllBooks.fulfilled, (state, action) => {
        // normalize fetched data
        const newBookList = [];
        action.payload.forEach((book) => {
          const isOnReadList = ReadingList.includes(book.book.id);
          newBookList.push({ ...book.book, onReadList: isOnReadList });
        });
        // Add any fetched books to the array
        return newBookList;
      });
  },
});

// Export the reducer, either as a default or named export
export default BookSlice.reducer;
