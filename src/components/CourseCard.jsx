import BasicRating from "./BasicRating"
import { SiTicktick as All } from "react-icons/si";
import { MdSignalCellular3Bar as Intermediate } from "react-icons/md";
import { MdSignalCellular1Bar as Beginner } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { setSelectedCourse } from '../features/courses/coursesSlice';

const CourseCard = (props) => {
  const dispatch = useDispatch();
  const { name, description, stars, img, usersReviewed, level} = props.courseData;

  function handleClick() {
    dispatch(setSelectedCourse(props.courseData.creatorName));
  }

  return (
    <div className="flex items-center w-full p-3 rounded-xl h-[130px] gap-4 bg-white shadow-md cursor-pointer max-1000:flex-col max-1000:items-start max-1000:h-fit" onClick={handleClick}>
      <figure className="w-[33%] rounded-xl h-full max-1000:w-[100%]">
        <img className="w-full rounded-xl  h-full object-cover" src={img} alt="course-image" />
      </figure>
      <div className="flex w-[67%] flex-col justify-between h-full pb-[9px] max-1000:w-[100%] max-1000:pb-0 max-1000:gap-2">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-sm text-course-card-topic">{name}</h2>
          <p className="text-xs text-gray-400 font-semibold">{description}</p>
        </div>
        <div className="flex items-center justify-between max-885:flex-col max-885:items-start max-885:gap-2">
          <div className="flex items-center gap-2">
            <BasicRating name="size-small" size="small" stars={stars}/>
            <div className="flex items-center gap-1">
              <span className="text-xs font-bold">{stars}</span>
              <span className="text-xs text-gray-500">{(usersReviewed)}</span>
            </div>
          </div>
          <div className="bg-gray-100 p-2 px-2 rounded-lg flex items-center gap-2">
            { level === 'Beginner' ? <Beginner className="text-gray-500"/> : level === 'Intermediate' ? <Intermediate className="text-gray-500"/> : <All className="text-gray-500"/>}
            <p className="text-xs font-semibold text-gray-500">{level}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
