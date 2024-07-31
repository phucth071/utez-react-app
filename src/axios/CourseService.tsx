import axios from "axios";

const REST_API_BASE_URL = "http://localhost:9191/api/v1/courses";

interface Course {
  id: number;
  name: string;
  description: string;
  startDate: string;
  state: string;
  thumbnail: string;
  categoryId: number;
  teacherId: number;
  createdAt: Date;
  createdBy: number;
  updatedAt: Date;
  updatedBy: number;
}

export const getAllCourse = () => axios.get(REST_API_BASE_URL);

export const getCourseById = (courseId: number) =>
  axios.get(REST_API_BASE_URL + "/" + courseId);

export const createCourse = (course: Course) =>
  axios.post(REST_API_BASE_URL, course);

export const editCourse = (courseId: number, course: Course) =>
  axios.patch(REST_API_BASE_URL + "/" + courseId, course);

export const deleteCourse = (courseId: number) =>
  axios.delete(REST_API_BASE_URL + "/" + courseId);
