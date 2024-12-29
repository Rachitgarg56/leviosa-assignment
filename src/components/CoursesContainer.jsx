import Coursecard from './CourseCard'
import coursesData from '../data/coursesData'
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';

const CoursesContainer = () => {
  const filteredCourses = useSelector((state) => state.course.filteredCourses);

  return (
    <div className='flex flex-col gap-4'>
        {
            filteredCourses.map((courseData) => {
                return <Coursecard key={uuidv4()} courseData={courseData}/>;
            })
        }
        {/* <Coursecard /> */}
    </div>
  )
}

export default CoursesContainer
