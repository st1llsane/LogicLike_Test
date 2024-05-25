import { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'

import { Course } from '../types/types'

export const useGetCourses = () => {
	const [courses, setCourses] = useState<Course[] | []>([])
	const [filteredCourses, setFilteredCourses] = useState<Course[] | []>([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const getCourses = async () => {
			try {
				const res: AxiosResponse = await axios.get(
					'https://logiclike.com/docs/courses.json'
				)

				setCourses(res.data)
				setFilteredCourses(res.data)
			} catch (error) {
				console.log('Error on fetching courses', error)
			} finally {
				setIsLoading(false)
			}
		}

		getCourses()
	}, [])

	const coursesTags =
		Array.from(new Set(courses?.map((course) => course.tags).flat())) || []

	const setCoursesByTag = (tag: string) => {
		const coursesByTag = courses?.filter((course) =>
			course.tags.includes(tag)
		)

		setFilteredCourses(coursesByTag.length > 0 ? coursesByTag : courses)
	}

	return {
		coursesTags,
		filteredCourses,
		isLoading,
		setCoursesByTag,
	}
}
