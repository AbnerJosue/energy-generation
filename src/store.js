import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { api } from './logic'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer, 
  },
  devTools: process.env.REACT_APP_ENABLE_REDUX_DEV_TOOLS === 'true',
  middleware:(getDefaultMiddleware) => {
    return  getDefaultMiddleware().concat(api.middleware)
  }
});


export const useSelector = useReduxSelector;

export const useDispatch = () => useReduxDispatch();