import CoursesSection from '../components/CoursesSection'
import CoursesDetailSection from '../components/CoursesDetailSection'

const Courses = () => {
  return (
    <div className="bg-[#F9F9F9] h-full rounded-2xl flex">
      <CoursesSection/>
      <CoursesDetailSection/>
    </div>
  )
}

export default Courses
