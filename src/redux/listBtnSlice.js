import { createSlice } from '@reduxjs/toolkit';

// Store Slices
const ListBtnSlice = createSlice({
  name: 'listBtn',
  initialState: {
    isAnimated: false,
  },
  reducers: {
    setAnimated: (state) => {
      state.isAnimated = true;
    },
    resetAnimated: (state) => {
      state.isAnimated = false;
    },
  },
});

export const { setAnimated, resetAnimated } = ListBtnSlice.actions;
export default ListBtnSlice.reducer;
