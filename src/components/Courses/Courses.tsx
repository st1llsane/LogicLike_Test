import CoursesFilters from '../CoursesFilters/CoursesFilters'
import CoursesList from '../CoursesList/CoursesList'

import styles from './Courses.module.scss'
import { useGetCourses } from '../shared/hooks/useGetCourses'

const Courses = () => {
	const { coursesTags, filteredCourses, setCoursesByTag } = useGetCourses()

	return (
		<section className={styles.courses}>
			<CoursesFilters
				coursesTags={coursesTags}
				setCoursesByTag={setCoursesByTag}
			/>
			<CoursesList courses={filteredCourses} />
		</section>
	)
}

export default Courses
