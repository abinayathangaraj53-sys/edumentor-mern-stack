import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./CoursePage.css";

export default function CoursePage() {
  const { code } = useParams();
  const userId = localStorage.getItem("userId");

  const [course, setCourse] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);

  // 🎓 Certificate states
  const [certificateName, setCertificateName] = useState("");
  const [certificateGenerated, setCertificateGenerated] = useState(false);
  const [certificateId, setCertificateId] = useState(null);

  // 🔹 Load course
  useEffect(() => {
    const loadCourse = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/courses/${code}`
      );
      setCourse(res.data);
      setActiveLesson(res.data.modules[0].lessons[0]);
    };
    loadCourse();
  }, [code]);

  if (!course) return <p>Loading...</p>;

  // 🎯 Final lesson check
  const isFinalLesson =
    activeLesson?.title?.toLowerCase().includes("final");

  // 🎓 Certificate handler (logic unchanged)
  const handleCertificatePayment = async () => {
    if (!userId || !certificateName.trim()) return;

    // fake payment internally (no UI shown)
    setTimeout(async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/certificate/pay",
          {
            userId,
            studentName: certificateName,
            courseCode: course.code,
            courseTitle: course.title,
          }
        );

        setCertificateId(res.data.certificateId);
        setCertificateGenerated(true);
      } catch (err) {
        console.error("Certificate generation failed", err);
      }
    }, 1000);
  };

  return (
    <div className="course-layout">
      {/* LEFT SIDEBAR */}
      <aside className="course-sidebar">
        <h2>{course.title}</h2>

        {course.modules.map((module) => (
          <div key={module.title}>
            <h3>{module.title}</h3>

            {module.lessons.map((lesson) => (
              <div
                key={lesson.lessonId}
                className="lesson-item"
                onClick={() => setActiveLesson(lesson)}
              >
                ▶ {lesson.title}
              </div>
            ))}
          </div>
        ))}
      </aside>

      {/* RIGHT CONTENT */}
      <main className="course-content">
        {activeLesson && (
          <>
            <h3>{activeLesson.title}</h3>

            {activeLesson.videoUrl && (
              <iframe
                src={activeLesson.videoUrl}
                title={activeLesson.title}
                allowFullScreen
              />
            )}

            {activeLesson.content && (
              <div className="lesson-content">
                <h4>Lesson Notes</h4>
                {activeLesson.content.map((t, i) => (
                  <p key={i}>{t}</p>
                ))}
              </div>
            )}

            {/* 🎓 CLEAN CERTIFICATE UI */}
            {isFinalLesson && (
              <div className="certificate-udemy">
                {!certificateGenerated ? (
                  <>
                    <h3 className="cert-title">
                      🎓 Course Completion Certificate
                    </h3>

                    <p className="cert-subtitle">
                      Congratulations! You have successfully completed this
                      course.
                    </p>

                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={certificateName}
                      onChange={(e) =>
                        setCertificateName(e.target.value)
                      }
                      className="cert-input"
                    />

                    <button
                      onClick={handleCertificatePayment}
                      className="cert-btn"
                    >
                      Certificate of
                    </button>
                  </>
                ) : (
                  <>
                    <h3 className="cert-success">
                      🎉 Certificate Generated
                    </h3>
                    <p>Your certificate is ready</p>

                    <a
                      href={`/certificate/${certificateId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-download"
                    >
                      Download Certificate
                    </a>
                  </>
                )}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
