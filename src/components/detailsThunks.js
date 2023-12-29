// detailsThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategoryDetails = createAsyncThunk('details/fetchCategoryDetails', async (categoryName) => {
  try {
    const response = await axios.get(`https://emojihub.yurace.pro/api/all/category/${categoryName}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching category details:', error);
    throw error;
  }
});
