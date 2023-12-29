import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categoriesSlice';
import detailsReducer from './detailsSlice';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    details: detailsReducer,
  },
});

export default store;
