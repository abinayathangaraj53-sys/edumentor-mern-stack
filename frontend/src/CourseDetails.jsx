import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCourseById } from "../services/courseService";
import axios from "axios";

export default function CourseDetails() {
  const { courseId } = useParams();

  const [course, setCourse] = useState(null);
  const [user, setUser] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);

  // 🔹 Fetch course + user
  useEffect(() => {
    const token = localStorage.getItem("token");

    // Course data
    getCourseById(courseId).then((res) => {
      setCourse(res.data);
    });

    // User data
    axios
      .get("http://localhost:5000/api/user/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data);
        setCompletedLessons(res.data.completedLessons || []);
      });
  }, [courseId]);

  // 🔹 Mark lesson completed
  const markCompleted = async (lessonId) => {
    if (completedLessons.includes(lessonId)) return;

    const token = localStorage.getItem("token");

    await axios.post(
      "http://localhost:5000/api/progress/complete",
      { courseId, lessonId },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    setCompletedLessons((prev) => [...prev, lessonId]);
  };

  if (!course || !user) return <p>Loading course...</p>;

  // 🔹 Count total lessons
  const totalLessons = course.modules.reduce(
    (sum, m) => sum + m.lessons.length,
    0
  );

  const isCourseCompleted =
    completedLessons.length === totalLessons;

  return (
    <div className="course-details">
      <h1>{course.title}</h1>
      <p>{course.description}</p>

      <hr />

      {course.modules.map((module, i) => {
        // 🔐 Unlock logic
        const isUnlocked =
          module.free ||
          user.purchasedCourses.includes(course.id);

        return (
          <div key={i} className="module">
            <h3>
              {module.title}{" "}
              {isUnlocked ? "🔓" : "🔒"}
            </h3>

            {module.lessons.map((lesson) => {
              const isCompleted =
                completedLessons.includes(lesson.id);

              return (
                <div
                  key={lesson.id}
                  className={`lesson ${
                    !isUnlocked ? "locked" : ""
                  }`}
                >
                  <span>
                    {lesson.title} ({lesson.duration})
                  </span>

                  {isCompleted && " ✅"}

                  {isUnlocked ? (
                    <video
                      width="400"
                      controls
                      onEnded={() =>
                        markCompleted(lesson.id)
                      }
                    >
                      <source
                        src={lesson.video}
                        type="video/mp4"
                      />
                    </video>
                  ) : (
                    <p>🔒 Buy course to unlock</p>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}

      {/* 🎓 CERTIFICATE */}
      {isCourseCompleted && (
        <div className="certificate-box">
          <h2>🎉 Course Completed!</h2>
          <button
            onClick={() =>
              axios.post(
                "http://localhost:5000/api/certificate/generate",
                { courseId },
                {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                      "token"
                    )}`,
                  },
                }
              )
            }
          >
            Download Certificate 📄
          </button>
        </div>
      )}
    </div>
  );
}
