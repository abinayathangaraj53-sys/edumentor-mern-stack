import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 40px",
        background: "#3a51a4ff",
      }}
    >
      <h2 style={{ color: "#38bdf8", margin: 0 }}>EduMentor</h2>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link to="/dashboard" style={{ color: "#e5e7eb" }}>
          Dashboard
        </Link>

        <button
          onClick={logout}
          style={{
            background: "#38bdf8",
            color: "#020617",
            border: "none",
            padding: "8px 16px",
            borderRadius: "999px",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Logout
        </button>
      </div>

    </nav>
  );
}
