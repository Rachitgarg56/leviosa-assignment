import BasicRating from "./BasicRating"
import { SiTicktick as All } from "react-icons/si";
import { MdSignalCellular3Bar as Intermediate } from "react-icons/md";
import { MdSignalCellular1Bar as Beginner } from "react-icons/md";

const CourseCard = (props) => {
  const { name, description, stars, img, usersReviewed, level} = props.courseData;

  return (
    <div className="flex items-center w-full p-3 rounded-xl h-[130px] gap-4 bg-white shadow-md">
      <figure className="w-[33%] rounded-xl h-full">
        <img className="w-full rounded-xl  h-full object-cover" src={img} alt="course-image" />
      </figure>
      <div className="flex w-[67%] flex-col justify-between h-full pb-[9px]">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-sm text-course-card-topic">{name}</h2>
          <p className="text-xs text-gray-400 font-semibold">{description}</p>
        </div>
        <div className="flex items-center justify-between">
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
