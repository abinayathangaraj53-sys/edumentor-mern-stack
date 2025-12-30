import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Lesson from "./Lesson";
import Certificate from "./Certificate";
import AdminPanel from "./AdminPanel";
import CoursePage from "./CoursePage";

export default function App() {
  return (
    <Routes>

      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/course/:code" element={<CoursePage />} />
      <Route path="/lesson/:courseId/:lessonId" element={<Lesson />} />
      <Route path="/certificate/:id" element={<Certificate />} />
      <Route path="/admin" element={<AdminPanel />} />

    </Routes>
  );
}
