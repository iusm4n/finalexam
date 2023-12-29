import { createSlice } from '@reduxjs/toolkit';

const detailsSlice = createSlice({
  name: 'details',
  initialState: null,
  reducers: {
    setDetails: (state, action) => {
      return action.payload;
    },
    clearDetails: (state) => null,
  },
});

export const { setDetails, clearDetails } = detailsSlice.actions;
export const selectDetails = (state) => state.details;
export default detailsSlice.reducer;
