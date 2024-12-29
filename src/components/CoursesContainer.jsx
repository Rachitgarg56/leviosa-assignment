import Coursecard from './CourseCard'
import coursesData from '../data/coursesData'
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';

const CoursesContainer = () => {
  const filteredCourses = useSelector((state) => state.course.filteredCourses);
  const searchedCourses = useSelector((state) => state.course.searchedCourses);

  return (
    <div className='flex flex-col gap-4'>
        {
          searchedCourses != null ?
          
          searchedCourses.map((courseData) => {
            return <Coursecard key={uuidv4()} courseData={courseData}/>;
          }) :
          
          filteredCourses.map((courseData) => {
              return <Coursecard key={uuidv4()} courseData={courseData}/>;
          })
        }
    </div>
  )
}

export default CoursesContainer
