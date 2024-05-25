import { FC } from 'react'

import { Course } from '../shared/types/types'

import styles from './CoursesList.module.scss'

interface CoursesListProps {
	courses: Course[] | []
}

const CoursesList: FC<CoursesListProps> = ({ courses }) => {
	return (
		<div className={styles.coursesList}>
			{courses?.map((course) => (
				<a href='#' className={styles.coursesListItem} key={course.id}>
					<div
						className={styles.coursesListItemImg}
						style={{ backgroundColor: course.bgColor }}
					>
						<img src={course.image} alt={course.name} />
					</div>
					<h3>{course.name}</h3>
				</a>
			))}
		</div>
	)
}

export default CoursesList
