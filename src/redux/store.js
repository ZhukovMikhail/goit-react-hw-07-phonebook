import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './createApi';
import { filterSlice } from './filterSlice';
import { modalSlice } from './modalSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
    [modalSlice.name]: modalSlice.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
