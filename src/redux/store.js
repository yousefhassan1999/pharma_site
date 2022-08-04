import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './counterSlice';
import DataSlice from './DataSlice';

// const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export const store = configureStore({
  reducer: {
    counter : counterSlice,
    DataGroup : DataSlice 
  },
});