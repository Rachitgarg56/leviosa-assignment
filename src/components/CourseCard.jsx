import BasicRating from "./BasicRating"

const CourseCard = (props) => {
  const { name, description, stars, img, usersReviewed, level} = props.courseData;

  return (
    <div className="flex items-center w-full p-3 rounded-xl h-[130px] gap-4 bg-white shadow-md">
      <figure className="w-[33%] rounded-xl h-full">
        <img className="w-full rounded-xl  h-full object-cover" src={'https://images.unsplash.com/photo-1588912914078-2fe5224fd8b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="course-image" />
      </figure>
      <div className="flex w-[67%] flex-col justify-between h-full pb-[9px]">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-sm text-course-card-topic">{name}</h2>
          <p className="text-xs text-gray-400 font-semibold">{description}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* stars component */}
            <BasicRating name="size-small" size="small" stars={stars}/>
            <div className="flex items-center gap-1">
              <span className="text-xs font-bold">{stars}</span>
              <span className="text-xs text-gray-500">{(usersReviewed)}</span>
            </div>
          </div>
          <div className="bg-gray-100 p-1 rounded-md">
            {/* icon */}
            <p className="text-xs font-semibold text-gray-500">{level}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
