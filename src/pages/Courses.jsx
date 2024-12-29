import CoursesSection from '../components/CoursesSection'
import CoursesDetailSection from '../components/CoursesDetailSection'

const Courses = () => {
  return (
    <div className="bg-[#F9F9F9] h-full rounded-2xl flex max-700:flex-col-reverse max-700:h-fit">
      <CoursesSection/>
      <CoursesDetailSection/>
    </div>
  )
}

export default Courses
