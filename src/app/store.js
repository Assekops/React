import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: campsitesReducer,
  },
});
