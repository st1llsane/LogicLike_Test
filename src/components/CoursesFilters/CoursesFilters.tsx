import { FC, useState } from 'react'

import { Tags } from '../shared/types/types'

import styles from './CoursesFilters.module.scss'

interface CoursesFiltersProps {
	coursesTags: Tags
	setCoursesByTag: (tag: string) => void
}

const CoursesFilters: FC<CoursesFiltersProps> = ({
	coursesTags,
	setCoursesByTag,
}) => {
	const [activeFilterIndex, setActiveFilterIndex] = useState(0)

	return (
		<div className={styles.coursesFilters}>
			<ul className={styles.coursesFiltersList}>
				{['Все темы', ...coursesTags].map((tag, i) => (
					<li
						className={activeFilterIndex === i ? styles.active : ''}
						onClick={() => {
							setActiveFilterIndex(i)
							setCoursesByTag(tag)
						}}
						key={tag}
					>
						{tag}
					</li>
				))}
			</ul>
		</div>
	)
}

export default CoursesFilters
