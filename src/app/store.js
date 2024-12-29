import { configureStore } from '@reduxjs/toolkit';
import courseReducer from '../features/courses/coursesSlice';

const store = configureStore({
  reducer: {
    course: courseReducer,
  },
});

export default store;
