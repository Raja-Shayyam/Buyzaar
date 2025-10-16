// // import React from 'react'

// // export const Singup = () => {
// //   return (
// //     <div>Singup</div>
// //   )
// // }

import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../CSS/SignupSection.css'
import { customhook } from "../context/store";
import useNav from "../Components/NavLink";

const Singup = () => {
  const { setUser, user } = customhook()
  const {navgate} = useNav()
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup form submitted:", form);
    if (user.email !== form.email) {
      setUser(form)
      setForm({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      })
      navgate('/login')
    } else {
      alert('user Exists with same cedintials !!! ')
    }
  };

  return (
    <section
      className="d-flex align-items-center justify-content-center h-100"
      style={{
        padding:'50px 0',
        background: "linear-gradient(180deg, #0d1b2a 0%, #1b263b 100%)",
        color: "#e0e0e0",
      }}
    >
      <div
        className="p-5 rounded-4 shadow-lg"
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "#1b263b",
          boxShadow: "0 0 25px rgba(0,224,255,0.15)",
          border: "1px solid rgba(0,224,255,0.2)",
        }}
      >
        <h2
          className="text-center mb-4 fw-bold"
          style={{
            color: "#00e0ff",
            textShadow: "0 0 10px rgba(0,224,255,0.7)",
          }}
        >
          Create Account
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label ms-1" style={{ color: "#9baec8" }}>
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="form-control text-light"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
              style={{
                backgroundColor: "#112240",
                border: "1px solid rgba(0,224,255,0.4)",
                borderRadius: "10px",
                color: "black !important",
              }}
            />
          </div>
          
          <div className="mb-3">
            <label className="form-label" style={{ color: "#9baec8", marginLeft:'4px' }}>
              User Name
            </label>
            <input
              type="username"
              name="username"
              className="form-control text-light"
              placeholder="Raja-shayyam"
              value={form.username}
              onChange={handleChange}
              required
              style={{
                backgroundColor: "#112240",
                border: "1px solid rgba(0,224,255,0.4)",
                borderRadius: "10px",
                color: "#e0e0e0 !important",
              }}
            />
          </div>

          <div className="mb-3">
            <label className="form-label ms-1" style={{ color: "#9baec8" }}>
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control text-light"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
              required
              style={{
                backgroundColor: "#112240",
                border: "1px solid rgba(0,224,255,0.4)",
                borderRadius: "10px",
                // color: "#000000ff",
              }}
            />
          </div>

          <div className="mb-4">
            <label className="form-label ms-1" style={{ color: "#9baec8" }}>
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control text-light"
              placeholder="Re-enter password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              style={{
                backgroundColor: "#112240",
                border: "1px solid rgba(0,224,255,0.4)",
                borderRadius: "10px",
                color: "#e0e0e0",
              }}
            />
          </div>

          <button
            type="submit"
            className="btn btn-outline-light w-100 py-2 fw-semibold rounded-pill "
          // style={{
          //   backgroundColor: "#00e0ff",
          //   color: "#0d1b2a",
          //   transition: "all 0.3s ease",
          //   boxShadow: "0 0 15px rgba(0,224,255,0.6)",
          // }}
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-4" style={{ color: "#9baec8" }}>
          Already have an account?{" "}
          <Link
            to="/login"
            style={{
              color: "#00e0ff",
              textDecoration: "none",
              fontWeight: "500",
            }}
            onMouseOver={(e) => (e.target.style.color = "#14f1ff")}
            onMouseOut={(e) => (e.target.style.color = "#00e0ff")}
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Singup;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Singup = () => {
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Signup submitted:", form);
//   };

//   return (
//     <section
//       className="d-flex align-items-center justify-content-center vh-100"
//       style={{
//         background:
//           "linear-gradient(180deg, #0d1b2a 0%, #1b263b 60%, #0a192f 100%)",
//         color: "#ffffff",
//         overflow: "hidden",
//       }}
//     >
//       <div
//         className="p-5 rounded-4"
//         style={{
//           width: "100%",
//           maxWidth: "420px",
//           background: "rgba(255, 255, 255, 0.05)",
//           border: "1px solid rgba(0, 224, 255, 0.15)",
//           boxShadow: "0 0 30px rgba(0, 224, 255, 0.08)",
//           backdropFilter: "blur(12px)",
//         }}
//       >
//         <h2
//           className="text-center mb-4 fw-bold"
//           style={{
//             color: "#00e0ff",
//             textShadow: "0 0 12px rgba(0,224,255,0.6)",
//           }}
//         >
//           Create Account
//         </h2>

//         <form onSubmit={handleSubmit}>
//           {/* Email */}
//           <div className="mb-3">
//             <label className="form-label" style={{ color: "#b0c4de" }}>
//               Email Address
//             </label>
//             <input
//               type="email"
//               name="email"
//               className="form-control"
//               placeholder="you@example.com"
//               value={form.email}
//               onChange={handleChange}
//               required
//               style={{
//                 background: "transparent",
//                 border: "1px solid rgba(0,224,255,0.4)",
//                 borderRadius: "10px",
//                 color: "#ffffff",
//                 padding: "10px 12px",
//               }}
//               onFocus={(e) =>
//                 (e.target.style.boxShadow = "0 0 10px rgba(0,224,255,0.5)")
//               }
//               onBlur={(e) => (e.target.style.boxShadow = "none")}
//             />
//           </div>

//           {/* Password */}
//           <div className="mb-3">
//             <label className="form-label" style={{ color: "#b0c4de" }}>
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               className="form-control"
//               placeholder="Enter password"
//               value={form.password}
//               onChange={handleChange}
//               required
//               style={{
//                 background: "transparent",
//                 border: "1px solid rgba(0,224,255,0.4)",
//                 borderRadius: "10px",
//                 color: "#ffffff",
//                 padding: "10px 12px",
//               }}
//               onFocus={(e) =>
//                 (e.target.style.boxShadow = "0 0 10px rgba(0,224,255,0.5)")
//               }
//               onBlur={(e) => (e.target.style.boxShadow = "none")}
//             />
//           </div>

//           {/* Confirm Password */}
//           <div className="mb-4">
//             <label className="form-label" style={{ color: "#b0c4de" }}>
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               name="confirmPassword"
//               className="form-control"
//               placeholder="Re-enter password"
//               value={form.confirmPassword}
//               onChange={handleChange}
//               required
//               style={{
//                 background: "transparent",
//                 border: "1px solid rgba(0,224,255,0.4)",
//                 borderRadius: "10px",
//                 color: "#ffffff",
//                 padding: "10px 12px",
//               }}
//               onFocus={(e) =>
//                 (e.target.style.boxShadow = "0 0 10px rgba(0,224,255,0.5)")
//               }
//               onBlur={(e) => (e.target.style.boxShadow = "none")}
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="btn w-100 py-2 fw-semibold rounded-pill"
//             style={{
//               backgroundColor: "#00e0ff",
//               color: "#0d1b2a",
//               boxShadow: "0 0 15px rgba(0,224,255,0.6)",
//               transition: "all 0.3s ease",
//             }}
//             onMouseOver={(e) => {
//               e.target.style.backgroundColor = "#00e0ff";
//               e.target.style.boxShadow = "0 0 20px rgba(0,224,255,0.8)";
//             }}
//             onMouseOut={(e) => {
//               e.target.style.backgroundColor = "#00e0ff";
//               e.target.style.boxShadow = "0 0 15px rgba(0,224,255,0.6)";
//             }}
//           >
//             Sign Up
//           </button>
//         </form>

//         <p className="text-center mt-4" style={{ color: "#b0c4de" }}>
//           Already have an account?{" "}
//           <Link
//             to="/login"
//             style={{
//               color: "#00e0ff",
//               textDecoration: "none",
//               fontWeight: "500",
//               transition: "color 0.2s ease",
//             }}
//             onMouseOver={(e) => (e.target.style.color = "#00ffae")}
//             onMouseOut={(e) => (e.target.style.color = "#00e0ff")}
//           >
//             Login
//           </Link>
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Singup;
