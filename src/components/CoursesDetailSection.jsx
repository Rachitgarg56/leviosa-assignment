import BasicRating from './BasicRating';
import CourseContent from './CourseContent';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { SiTicktick as All } from "react-icons/si";
import { MdSignalCellular3Bar as Intermediate } from "react-icons/md";
import { MdSignalCellular1Bar as Beginner } from "react-icons/md";

const CoursesDetailSection = () => {
  const course = useSelector((state) => state.course.selectedCourse);
  const { ytv, creatorName, creatorProfession, description, level, name, stars, status, usersReviewed, creatorProfile, content } = course;
  
  return (
    <div className="courses-detail-section bg-white w-[60%] p-6 rounded-2xl flex flex-col gap-6 overflow-y-scroll max-1240:w-[50%] max-1000:w-[60%] max-700:overflow-y-visible max-700:w-full max-426:p-2">
      <div className='flex flex-col gap-2'>

        <div className="aspect-video w-full rounded-xl">
            <iframe
                className="w-full h-full rounded-xl"
                src={ytv}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>

        <div className='flex flex-col gap-3'>
          <div className="flex items-center -mb-2 justify-between w-[260px]">
            <div className="flex items-center gap-2">
              <BasicRating name="size-small" size="small" stars={stars}/>
              <div className="flex items-center gap-1">
                <span className="text-xs font-bold">{stars}</span>
                <span className="text-xs text-gray-500">({usersReviewed})</span>
              </div>
            </div>
            <div className="bg-gray-100 p-2 px-2 rounded-lg flex items-center gap-2">
              { level === 'Beginner' ? <Beginner className="text-gray-500"/> : level === 'Intermediate' ? <Intermediate className="text-gray-500"/> : <All className="text-gray-500"/>}
              <p className="text-xs font-semibold text-gray-500">{'Beginner'}</p>
            </div>
          </div>

          <h1 className='text-course font-bold text-2xl'>{name}</h1>
          <p className='text-xs text-gray-400 font-semibold leading-5'>{description}</p>
          <div className='flex items-center gap-2'>
            <figure className='w-10 h-10 rounded-full'>
              <img className='w-full h-full object-cover rounded-full' src={creatorProfile} alt="profile-pic" />
            </figure>
            <div className='flex flex-col'>
              <p className='font-bold text-xs text-course-card-topic'>{creatorName}</p>
              <p className='text-xs text-gray-400 font-semibold'>{creatorProfession}</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
          <h2 className='text-course font-bold text-lg'>Course`s content</h2>
          <div className='text-sm text-gray-400 font-semibold'>
            <span>{content.length} lectures</span>
            <span> . </span>
            <span>2 hours</span>
          </div>
        </div>

        <div className='course-content-container flex flex-col gap-4'>
          {
            content.map((content) => {
              return <CourseContent key={uuidv4()} content={content}/>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default CoursesDetailSection
