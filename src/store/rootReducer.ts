import { combineReducers } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';

export const rootReducer = combineReducers({
  ui: uiReducer,
});
