import { createSlice } from '@reduxjs/toolkit';
import {
  banners,
  categories,
  cuisines,
  restaurants,
} from '@/constants/mockData';

interface UiState {
  banners: typeof banners;
  categories: typeof categories;
  cuisines: typeof cuisines;
  restaurants: typeof restaurants;
  loading: boolean;
}

const initialState: UiState = {
  banners: [],
  categories: [],
  cuisines: [],
  restaurants: [],
  loading: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    loadDataRequest(state) {
      state.loading = true;
    },
    loadDataSuccess(state) {
      state.banners = banners;
      state.categories = categories;
      state.cuisines = cuisines;
      state.restaurants = restaurants;
      state.loading = false;
    },
  },
});

export const { loadDataRequest, loadDataSuccess } = uiSlice.actions;
export default uiSlice.reducer;
