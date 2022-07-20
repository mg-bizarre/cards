import homeReducer from './homeSlice';
import postReducer from './postSlice';
import usersReducer from './usersSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    homePage: homeReducer,
    post: postReducer,
    users: usersReducer,
  },
});
export default store;
