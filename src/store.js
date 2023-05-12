import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import { api } from '@/logic'
import { services } from '@/logic/services';

export const store = configureStore({
  reducer: {
    rootReducer, 
    [api.reducerPath]: api.reducer, 
    [services.reducerPath]: services.reducer
  },
  devTools: process.env.REACT_APP_ENABLE_REDUX_DEV_TOOLS === 'true',
  middleware:(getDefaultMiddleware) => {
    return  getDefaultMiddleware().concat(api.middleware),
      getDefaultMiddleware().concat(services.middleware)
  }
});


export const useSelector = useReduxSelector;

export const useDispatch = () => useReduxDispatch();