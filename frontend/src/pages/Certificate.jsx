import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Certificate.css";

export default function Certificate() {
  const { id } = useParams();
  const [cert, setCert] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/certificate/${id}`)
      .then((res) => setCert(res.data));
  }, [id]);

  if (!cert) return <p>Loading...</p>;

  return (
    <div className="certificate-wrapper">
      <div className="certificate-box" id="certificate">
        <div className="certificate-border">

          {/* Brand */}
          <h1 className="brand">EduMentor</h1>

          {/* Title */}
          <h2 className="title">Certificate of Completion</h2>

          <p className="subtitle">This certificate is proudly presented to</p>

          {/* Name */}
          <h1 className="student-name">{cert.studentName}</h1>

          <p className="subtitle">for successfully completing the course</p>

          {/* Course */}
          <h2 className="course-title">{cert.courseTitle}</h2>

          {/* Gold Seal */}
          <div className="seal">✔ Certified</div>

          {/* Footer */}
          <div className="footer">
            <div>
              <p className="footer-label">Certificate ID</p>
              <p>{cert.certificateId}</p>
            </div>

            <div className="signature">
              <p className="sign-line"></p>
              <p className="sign-text">Authorized Signature</p>
            </div>

            <div>
              <p className="footer-label">Date</p>
              <p>{new Date(cert.issuedAt).toDateString()}</p>
            </div>
          </div>

        </div>
      </div>

      {/* Download PDF */}
      <a
        href={`http://localhost:5000/api/certificate/pdf/${cert.certificateId}`}
        className="pdf-btn"
      >
        Download PDF
      </a>
    </div>
  );
}
