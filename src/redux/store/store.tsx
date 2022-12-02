import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import { showHeaderProfile } from '../reducers/headerProfileOptions'
import showLoginConditions from '../reducers/Conditions'
import loginSlice from '../reducers/loginSlice'

const reducers = combineReducers({
  headerProfile: showHeaderProfile.reducer,
  loginConditions: showLoginConditions.reducer,
  login: loginSlice.reducer,
})

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['login'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
