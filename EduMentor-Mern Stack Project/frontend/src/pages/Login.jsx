import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      console.log("LOGIN RESPONSE:", res.data);

      // ✅ backend sends user._id
      const userId = res.data.user._id;

      localStorage.setItem("userId", userId);
      localStorage.setItem("token", res.data.token);

      navigate("/dashboard");

    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
    } finally {
      setLoading(false); // ✅ very important
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(205, 137, 247, 1)",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          width: "420px",
          padding: "32px",
          background: "#f7f2f8ff",
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "8px", color: "#9c9ef5ff" }}>
          EduMentor
        </h2>
        <p style={{ opacity: 0.7, marginBottom: "24px", color: "#231a1aff" }}>
          Login to continue learning
        </p>

        {error && (
          <div
            style={{
              background: "#c7b7faff",
              color: "#fff",
              padding: "10px",
              borderRadius: "8px",
              marginBottom: "16px",
            }}
          >
            {error}
          </div>
        )}

        <input
          type="email"
          placeholder="Email address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "12px" }}
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "12px" }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "10px",
            background: "#b084f8ff",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p style={{ marginTop: "16px", fontSize: "14px", color: "#9e8282ff" }}>
          New here?{" "}
          <span
            style={{ color: "#33444aff", cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >
            Create an account
          </span>
        </p>
      </form>
    </div>
  );
}
