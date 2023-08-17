import { createSlice } from '@reduxjs/toolkit';

// Store Slices
const ListBtnSlice = createSlice({
  name: 'listBtn',
  initialState: {
    isAnimated: false,
  },
  reducers: {
    setAnimated: (state, action) => {
      state.isAnimated = action.payload;
    },
    resetAnimated: (state) => {
      state.isAnimated = false;
    },
  },
});

export const { setAnimated, resetAnimated } = ListBtnSlice.actions;
export default ListBtnSlice.reducer;
