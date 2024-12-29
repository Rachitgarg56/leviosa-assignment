import BasicRating from './BasicRating';
import CourseContent from './CourseContent';

const CoursesDetailSection = () => {
  return (
    <div className="courses-detail-section bg-white w-[60%] p-6 rounded-2xl flex flex-col gap-6 overflow-y-scroll">
      <div className='flex flex-col gap-2'>

        <div className="aspect-video w-full rounded-xl">
            <iframe
                className="w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/FF3fuYLnApQ?autoplay=1&mute=1&playsinline=1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>

        <div className='flex flex-col gap-3'>
          <div className="flex items-center -mb-2 justify-between w-[260px]">
            <div className="flex items-center gap-2">
              <BasicRating name="size-small" size="small" stars={2}/>
              <div className="flex items-center gap-1">
                <span className="text-xs font-bold">{2}</span>
                <span className="text-xs text-gray-500">{(1000)}</span>
              </div>
            </div>
            <div className="bg-gray-100 p-2 px-2 rounded-lg flex items-center gap-2">
              {/* { level === 'Beginner' ? <Beginner className="text-gray-500"/> : level === 'Intermediate' ? <Intermediate className="text-gray-500"/> : <All className="text-gray-500"/>} */}
              <p className="text-xs font-semibold text-gray-500">{'Beginner'}</p>
            </div>
          </div>

          <h1 className='text-course font-bold text-2xl'>English for career development</h1>
          <p className='text-xs text-gray-400 font-semibold leading-5'>Master Python programming for data analysis and visualization. Master Python programming for data analysis and visualization. Master Python programming for data analysis and visualization Master Python programming for data analysis and visualization, Master Python programming for data analysis and visualization</p>
          <div className='flex items-center gap-2'>
            <figure className='w-10 h-10 border border-solid border-black rounded-full'>
              <img className='w-full h-full object-cover rounded-full' src="https://img.freepik.com/free-psd/portrait-man-teenager-isolated_23-2151745771.jpg" alt="profile-pic" />
            </figure>
            <div className='flex flex-col'>
              <p className='font-bold text-xs text-course-card-topic'>Cortney MC` Gregor</p>
              <p className='text-xs text-gray-400 font-semibold'>Professional English Teacher</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
          <h2 className='text-course font-bold text-lg'>Course`s content</h2>
          <div className='text-sm text-gray-400 font-semibold'>
            <span>12 lectures</span>
            <span> . </span>
            <span>2 hours</span>
          </div>
        </div>

        <div className='course-content-container flex flex-col gap-4'>
          <CourseContent/>
          <CourseContent/>
          <CourseContent/>
          <CourseContent/>
        </div>
      </div>
    </div>
  )
}

export default CoursesDetailSection
