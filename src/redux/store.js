import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './createApi';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
