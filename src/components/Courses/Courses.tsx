import CoursesFilters from '../CoursesFilters/CoursesFilters'
import CoursesList from '../CoursesList/CoursesList'
import Spinner from '../shared/ui/Spinner/Spinner'

import { useGetCourses } from '../shared/hooks/useGetCourses'

import styles from './Courses.module.scss'

const Courses = () => {
	const { coursesTags, filteredCourses, isLoading, setCoursesByTag } =
		useGetCourses()

	return (
		<div>
			<section className={styles.courses}>
				<CoursesFilters
					coursesTags={coursesTags}
					setCoursesByTag={setCoursesByTag}
				/>
				{isLoading ? (
					<div className={styles.coursesContent}>
						<Spinner />
					</div>
				) : filteredCourses && filteredCourses.length > 0 ? (
					<CoursesList courses={filteredCourses} />
				) : (
					<div className={styles.coursesContent}>
						<h4>По данной теме пока-что нет курсов :(</h4>
					</div>
				)}
			</section>
		</div>
	)
}

export default Courses
