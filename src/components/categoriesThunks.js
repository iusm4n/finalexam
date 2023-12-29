// categoriesThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchAllCategories = createAsyncThunk('categories/fetchAllCategories', async (_, { dispatch }) => {
  try {
    const response = await fetch('https://emojihub.yurace.pro/api/all');
    
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }

    const data = await response.json();

    // Dispatch the result to the store
    dispatch(fetchAllCategories.fulfilled(data));
  } catch (error) {
    console.error('Error fetching categories:', error);

    // Dispatch the error to the store
    dispatch(fetchAllCategories.rejected(error));
  }
});

export { fetchAllCategories };
