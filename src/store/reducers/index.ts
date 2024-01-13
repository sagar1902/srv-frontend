import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // Import individual slices

export const rootReducer = combineReducers({
  counter: counterReducer,
  // Add more reducers as needed
});
