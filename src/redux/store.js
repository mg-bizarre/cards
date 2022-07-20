import homeReducer from './homeSlice';
import postReducer from './postSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    homePage: homeReducer,
    post: postReducer,
  },
});
export default store;
