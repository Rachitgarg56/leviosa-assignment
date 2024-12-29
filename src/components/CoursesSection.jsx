import CoursesContainer from "./CoursesContainer"
import { CircleFlag } from 'react-circle-flags';
import { IoFilterSharp as Filter } from "react-icons/io5";
import ExpandingSearchBar from "./SearchBar";
import { useDispatch } from 'react-redux';
import { filterCoursesByLanguage, clearSearchedCourses } from '../features/courses/coursesSlice';
import { useState } from 'react';

const languageFiltersData = {
  'English': <CircleFlag countryCode="gb" height="20" width={20} />,
  'Spanish': <CircleFlag countryCode="es" height="20" width={20} />,
  'French': <CircleFlag countryCode="fr" height="20" width={20} />,
  'Chinese': <CircleFlag countryCode="cn" height="20" width={20} />,
} 

const CoursesSection = () => { 
  const [selectedLang, setSelectedLang] = useState(null);

  const dispatch = useDispatch();

  function applyFilter(lang) {
    if (selectedLang === lang) {
      setSelectedLang(null);
      dispatch(filterCoursesByLanguage(""));
      return;
    } else {
      setSelectedLang(lang);
      dispatch(filterCoursesByLanguage(lang));
    }
    dispatch(clearSearchedCourses(null));
  }

  return (
    <div className="courses-section w-[40%] p-6 bg-courses-section rounded-2xl overflow-y-scroll flex flex-col gap-6 max-1240:w-[50%] max-1000:w-[40%] max-700:overflow-y-visible max-700:w-full max-426:p-2">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-course font-bold text-2xl">Courses</h1>
          <ExpandingSearchBar/>
        </div>

        <div className="flex items-center gap-8">
          <span className="font-semibold text-sm text-course-card-topic">All</span>
          <span className="text-sm text-gray-400">Active</span>
          <span className="text-sm text-gray-400">Completed</span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="language-filter flex items-center gap-4 max-1000:flex-wrap">
            {Object.entries(languageFiltersData).map(([language, icon]) => (
              <div key={language} className={`${selectedLang === language && 'bg-green-400'} bg-gray-100 p-2 px-2 rounded-lg flex items-center gap-2 shadow-md cursor-pointer`} onClick={()=>{
                applyFilter(language);
              }}>
                <div className="text-gray-500">{icon}</div>
                <div className="text-xs font-semibold text-gray-500">{language}</div>
              </div>
            ))}
          </div>

          <div className="p-2 bg-white rounded-md max-1000:hidden max-700:overflow-y-visible">
            <Filter/>
          </div>
        </div>
      </div>

      <div className="courses-section-wrapper">
        <CoursesContainer/>
      </div>
    </div>
  )
}

export default CoursesSection
