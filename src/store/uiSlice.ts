import { createSlice } from '@reduxjs/toolkit';
import {
  banners,
  categories,
  cuisines,
  menuItems,
  newRestaurants,
} from '@/constants/mockData';

interface UiState {
  banners: typeof banners;
  categories: typeof categories;
  cuisines: typeof cuisines;
  newRestaurants: typeof newRestaurants;
  menuItems: typeof menuItems;
  loading: boolean;
  selectedAddress: string;
}

const initialState: UiState = {
  banners: [],
  categories: [],
  cuisines: [],
  newRestaurants: [],
  menuItems: [],
  loading: false,
  selectedAddress: '123 Main St, Springfield',
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
      state.newRestaurants = newRestaurants;
      state.menuItems = menuItems;
      state.loading = false;
    },
    setSelectedAddress: (state, action) => {
      state.selectedAddress = action.payload;
    },
  },
});

export const { loadDataRequest, loadDataSuccess, setSelectedAddress } =
  uiSlice.actions;
export default uiSlice.reducer;
