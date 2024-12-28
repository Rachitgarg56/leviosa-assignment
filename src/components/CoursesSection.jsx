import CoursesContainer from "./CoursesContainer"

const CoursesSection = () => {
  return (
    <div className="courses-section w-[40%] p-6 bg-courses-section rounded-2xl overflow-y-scroll">
      <div className="courses-section-wrapper">
        <CoursesContainer/>
      </div>
    </div>
  )
}

export default CoursesSection
