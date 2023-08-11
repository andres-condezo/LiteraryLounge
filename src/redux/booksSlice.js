import { createSlice } from '@reduxjs/toolkit';
import { saveState } from '../logic/localStorage';

const initialState = [];

const BookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const library = action.payload;
      library.library.forEach((book) => {
        state.push(book.book);
      });
      saveState(state);
    },
  },
});

export const { addBook } = BookSlice.actions;
export default BookSlice.reducer;
