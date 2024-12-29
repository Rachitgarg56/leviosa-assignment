import { createSlice } from '@reduxjs/toolkit';
import coursesData from '../../data/coursesData';

const courseSlice = createSlice({
  name: 'course',
  initialState: {
    courses: [...coursesData],
    selectedCourse: coursesData[0],
    filteredCourses: [...coursesData],
    searchedCourses: null,
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
    filterCoursesByName: (state, action) => {
      if (action.payload === "") {
        state.searchedCourses = null;  
      } else {
        const input = action.payload.toLowerCase(); 
        state.searchedCourses = state.courses.filter((course) =>
          course.name.toLowerCase().includes(input) 
        );
      }
    },
    clearSearchedCourses: (state, action) => {
      state.searchedCourses = action.payload;
    }
  },
});

export const { setSelectedCourse, updateSelectedCourseVideo, filterCoursesByLanguage, filterCoursesByName, clearSearchedCourses } = courseSlice.actions;

export default courseSlice.reducer;
