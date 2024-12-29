import { AiTwotoneClockCircle as Clock } from "react-icons/ai";
import { FaPlayCircle as Play } from "react-icons/fa";
import { FaPauseCircle as Pause } from "react-icons/fa";
import { HiOutlineDotsHorizontal as Dots } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import { updateSelectedCourseVideo } from '../features/courses/coursesSlice';

const CourseContent = ( { content } ) => {
  const course = useSelector((state) => state.course.selectedCourse);
  const dispatch = useDispatch();
  const { name, description, ytv, status, color } = content;

  function handleClick() {
    dispatch(updateSelectedCourseVideo(ytv));
  }

  return (
    <div className="flex items-center w-full rounded-xl h-[130px] shadow-md cursor-pointer" onClick={handleClick}>
      <div style={{backgroundColor: color}} className="w-[25%] h-full rounded-tl-xl rounded-bl-xl flex items-center justify-center">
        <Dots className="text-gray-100 text-6xl"/>
      </div>

      <div className="flex justify-between items-center w-[75%] p-4">
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[10px] text-gray-400 font-semibold">
                <Clock/>
                <span>03:29 mins</span>
            </div>
            <h3 className="font-bold text-sm text-course-card-topic">{name}</h3>
            <p className="text-xs text-gray-400 font-semibold">{description}</p>
        </div>
        {
          course.ytv === ytv ? 
          <Pause className="w-8 h-8 mr-6"/> :
          <Play className="w-8 h-8 mr-6"/>
        }
      </div>
    </div>
  )
}

export default CourseContent
