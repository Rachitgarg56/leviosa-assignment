import Coursecard from './CourseCard'
import coursesData from '../data/coursesData'
import { v4 as uuidv4 } from 'uuid';


const CoursesContainer = () => {
  return (
    <div className='flex flex-col gap-4'>
        {
            coursesData.map((courseData) => {
                return <Coursecard key={uuidv4()} courseData={courseData}/>;
            })
        }
        {/* <Coursecard /> */}
    </div>
  )
}

export default CoursesContainer
