import Navbar from "../components/common/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });

      alert("Registered successfully! Please login.");
      navigate("/login");   // ✅ THIS WAS MISSING
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:"#f5f5f7ff 100%",
        }}
      >
        <form
          onSubmit={submit}
          className="card"
          style={{ maxWidth: 420, padding: "32px", textAlign: "center" }}
        >
          <h2>Create Account 🚀</h2>

          {error && (
            <div
              style={{
                background: "#f5cdcdff",
                padding: "10px",
                borderRadius: "8px",
                marginBottom: "12px",
              }}
            >
              {error}
            </div>
          )}

          <input
            placeholder="Name"
            required
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            style={{ width: "100%", marginTop: "12px" }}
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </>
  );
}
