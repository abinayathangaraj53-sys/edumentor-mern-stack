import axios from "axios";

const API = "http://localhost:5000/api";

export const getAllCourses = async () => {
  const res = await axios.get(`${API}/courses`);
  return res.data;
};

export const getCourseById = async (id) => {
  const res = await axios.get(`${API}/courses/${id}`);
  return res.data;
};
