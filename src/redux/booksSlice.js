import { createSlice } from '@reduxjs/toolkit';
import { saveState } from '../logic/localStorage';

const BookSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    getBooks: (state, action) => {
      const newInitialState = [];
      const books = action.payload;
      books.library.forEach((book) => {
        newInitialState.push({ ...book.book, onReadList: false });
      });
      saveState(state);
      return newInitialState;
    },
  },
});

export const { getBooks } = BookSlice.actions;
export default BookSlice.reducer;
