import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {counterSlice} from './counterReducer';

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});