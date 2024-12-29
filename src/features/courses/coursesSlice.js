import { createSlice } from '@reduxjs/toolkit';
import coursesData from '../../data/coursesData';

const courseSlice = createSlice({
  name: 'course',
  initialState: {
    courses: [...coursesData],
    selectedCourse: coursesData[0],
  },
  reducers: {
    setCourses: (state, action) => {
      console.log(state.courses)
      state.courses = action.payload;
    },
    setSelectedCourse: (state, action) => {
      
      const course = state.courses.find(
        (course) => course.creatorName === action.payload
      );
      if (course) {
        state.selectedCourse = course;
      }
    },
  },
});

export const { setCourses, setSelectedCourse } = courseSlice.actions;

export default courseSlice.reducer;
