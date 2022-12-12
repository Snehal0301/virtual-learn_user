import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { showHeaderProfile } from '../reducers/headerProfileOptions';
import showLoginConditions from '../reducers/Conditions';
import loginSlice from '../reducers/loginSlice';
import myCourseReducer from '../reducers/myCourseReducer';
import { quizAnswerSlice } from '../reducers/result';
import testSlice from '../reducers/testSlice';
import allcourseReducer from '../reducers/allcourseSlice';
import categoryReducer from '../reducers/categorySlice';
import answerHeaderSlice from '../reducers/testAnswerHeader';
import answerSlice from '../reducers/testAnswer';
import { testSuccessRedSlice } from '../reducers/SuccessTestRed';
import { showSuccessPageSlice } from '../reducers/showSuccesspage';
import { finaltestShowPageSlice } from '../reducers/finalTestSuccess';
import FinalResultSlice from '../reducers/finalResult';
import basicCourseSlice from '../reducers/basicCourses';
import advancedCourseSlice, { advancedCourse } from './../reducers/advancedCourse';
import subCategoriesSlice, { subCategories } from './../reducers/subCategories';

const reducers = combineReducers({
  headerProfile: showHeaderProfile.reducer,
  loginConditions: showLoginConditions.reducer,
  login: loginSlice.reducer,
  mycourse: myCourseReducer,
  quizAnswer: quizAnswerSlice.reducer,
  test: testSlice.reducer,
  answerHeader: answerHeaderSlice.reducer,
  answer: answerSlice.reducer,
  allcourse: allcourseReducer,
  categorydata: categoryReducer,
  testSuccessRed: testSuccessRedSlice.reducer,
  showSuccessPage: showSuccessPageSlice.reducer,
  finaltestShowPage: finaltestShowPageSlice.reducer,
  FinalResult: FinalResultSlice.reducer,
  basicCourse:basicCourseSlice.reducer,
  advancedCourse:advancedCourseSlice.reducer,
  subCategories:subCategoriesSlice.reducer
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['login', 'test', 'answerHeader', 'answer', ' FinalResult'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
