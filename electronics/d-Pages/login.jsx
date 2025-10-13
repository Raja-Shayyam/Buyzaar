import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", form);
  };

  return (
    <section
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        background: "#0d1b2a",
        color: "#e0e0e0",
      }}
    >
      <div
        className="p-5 rounded-4 shadow-lg"
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "#1b263b",
          border: "1px solid rgba(0, 224, 255, 0.2)",
          boxShadow: "0 0 25px rgba(0, 224, 255, 0.1)",
        }}
      >
        <h2
          className="text-center fw-bold mb-4"
          style={{
            color: "#00e0ff",
            textShadow: "0 0 10px rgba(0,224,255,0.5)",
          }}
        >
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label" style={{ color: "#9baec8" }}>
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="form-control"
              value={form.email}
              onChange={handleChange}
              required
              style={{
                backgroundColor: "#112240",
                border: "1px solid rgba(0, 224, 255, 0.3)",
                borderRadius: "10px",
                color: "#e0e0e0",
                padding: "10px 12px",
              }}
              onFocus={(e) =>
                (e.target.style.boxShadow = "0 0 10px rgba(0,224,255,0.6)")
              }
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label" style={{ color: "#9baec8" }}>
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="form-control"
              value={form.password}
              onChange={handleChange}
              required
              style={{
                backgroundColor: "#112240",
                border: "1px solid rgba(0, 224, 255, 0.3)",
                borderRadius: "10px",
                color: "#e0e0e0",
                padding: "10px 12px",
              }}
              onFocus={(e) =>
                (e.target.style.boxShadow = "0 0 10px rgba(0,224,255,0.6)")
              }
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />
          </div>

          {/* Forgot Password */}
          <div className="text-end mb-4">
            <Link
              to="/forgot-password"
              style={{
                color: "#14f1ff",
                fontSize: "0.9rem",
                textDecoration: "none",
              }}
              onMouseOver={(e) => (e.target.style.color = "#0aff9d")}
              onMouseOut={(e) => (e.target.style.color = "#14f1ff")}
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-100 fw-semibold py-2 rounded-pill"
            style={{
              backgroundColor: "#00e0ff",
              color: "#0d1b2a",
              border: "none",
              boxShadow: "0 0 15px rgba(0, 224, 255, 0.5)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#14f1ff";
              e.target.style.boxShadow = "0 0 25px rgba(20,241,255,0.8)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#00e0ff";
              e.target.style.boxShadow = "0 0 15px rgba(0,224,255,0.5)";
            }}
          >
            Login
          </button>
        </form>

        {/* Sign Up Link */}
        <p
          className="text-center mt-4"
          style={{ color: "#9baec8", fontSize: "0.95rem" }}
        >
          Don’t have an account?{" "}
          <Link
            to="/signup"
            style={{
              color: "#00e0ff",
              textDecoration: "none",
              fontWeight: "500",
            }}
            onMouseOver={(e) => (e.target.style.color = "#0aff9d")}
            onMouseOut={(e) => (e.target.style.color = "#00e0ff")}
          >
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
