import { createSlice } from '@reduxjs/toolkit';
import coursesData from '../../data/coursesData';

const courseSlice = createSlice({
  name: 'course',
  initialState: {
    courses: [...coursesData],
    selectedCourse: coursesData[0],
    filteredCourses: [...coursesData],
  },
  reducers: {
    setSelectedCourse: (state, action) => {
      
      const course = state.courses.find(
        (course) => course.creatorName === action.payload
      );
      if (course) {
        state.selectedCourse = course;
      }
    },
    updateSelectedCourseVideo: (state, action) => {
      const ytv = action.payload;
      if (state.selectedCourse && state.selectedCourse.hasOwnProperty('ytv')) {
        state.selectedCourse.ytv = ytv;
      }
    },
    filterCoursesByLanguage: (state, action) => {
      if (action.payload === "") {
        state.filteredCourses = state.courses;
      } else {
        state.filteredCourses = state.courses.filter(
          (course) => course.language === action.payload
        );
      }
    },
  },
});

export const { setSelectedCourse, updateSelectedCourseVideo, filterCoursesByLanguage } = courseSlice.actions;

export default courseSlice.reducer;
