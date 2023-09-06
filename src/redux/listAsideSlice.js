import { createSlice } from '@reduxjs/toolkit';

// Store Slices
const ListAsideSlice = createSlice({
  name: 'listAside',
  initialState: {
    isOpened: false,
  },
  reducers: {
    setListState: (state) => {
      state.isOpened = !state.isOpened;
    },
    resetListState: (state) => {
      state.isOpened = false;
    },
  },
});

export const { setListState, resetListState } = ListAsideSlice.actions;
export default ListAsideSlice.reducer;
