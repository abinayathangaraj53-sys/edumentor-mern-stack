import { useParams } from "react-router-dom";
import { courseContents } from "../data/courseContents";

export default function CourseDetails() {
  const { id } = useParams();

  const course = courseContents[id];

  // 🔴 If course not found
  if (!course) {
    return <h2 style={{ padding: "20px" }}>Course not found</h2>;
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>{course.title}</h1>
      <p>{course.description}</p>

      {course.modules.map((module, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginTop: "20px",
            borderRadius: "8px",
          }}
        >
          <h3>{module.title}</h3>

          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            {module.lessons.map((lesson) => (
              <div
                key={lesson.id}
                style={{
                  border: "1px solid #999",
                  padding: "10px",
                  width: "200px",
                  borderRadius: "6px",
                  background: lesson.locked ? "#f3f3f3" : "#e6ffe6",
                }}
              >
                <h4>{lesson.title}</h4>
                <p>⏱ {lesson.duration}</p>
                <p>{lesson.locked ? "🔒 Locked" : "🔓 Free"}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
