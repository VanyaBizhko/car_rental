import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { favoriteSlice } from './Favorites/FavoritesSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorite'],
};

const rootReducer = combineReducers({
  favorite: favoriteSlice.reducer,
});

const persistUsersReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistUsersReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);