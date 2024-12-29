import { AiTwotoneClockCircle as Clock } from "react-icons/ai";
import { FaPlayCircle as Play } from "react-icons/fa";
import { FaPauseCircle as Pause } from "react-icons/fa";

const CourseContent = () => {
  return (
    <div className="flex items-center w-full rounded-xl h-[130px] shadow-md">
      <figure className="w-[25%] h-full rounded-tl-xl rounded-bl-xl">
        <img className="w-full h-full object-cover rounded-tl-xl rounded-bl-xl" src="https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="course-content-poster" />
      </figure>

      <div className="flex justify-between items-center w-[75%] p-4">
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[10px] text-gray-400 font-semibold">
                <Clock/>
                <span>03:29 mins</span>
            </div>
            <h3 className="font-bold text-sm text-course-card-topic">Intro</h3>
            <p className="text-xs text-gray-400 font-semibold">Meet your teacher and see what you are going to learn in this</p>
        </div>

        <Play className="w-8 h-8 mr-6"/>
      </div>
    </div>
  )
}

export default CourseContent
