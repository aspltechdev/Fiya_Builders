// import {
//   useState,
// } from "react";

// import {
//   Navigate,
//   useNavigate,
// } from "react-router-dom";

// import {
//   Building2,
//   Lock,
//   Mail,
// } from "lucide-react";

// import {
//   useAuth,
// } from "../../context/AuthContext.jsx";

// const Login = () => {
//   const {
//     login,
//     isAuthenticated,
//   } = useAuth();

//   const navigate =
//     useNavigate();

//   const [
//     email,
//     setEmail,
//   ] = useState("");

//   const [
//     password,
//     setPassword,
//   ] = useState("");

//   const [
//     error,
//     setError,
//   ] = useState("");

//   const [
//     loading,
//     setLoading,
//   ] = useState(false);

//   if (isAuthenticated) {
//     return (
//       <Navigate
//         to="/admin"
//         replace
//       />
//     );
//   }

//   const handleSubmit =
//     async (e) => {
//       e.preventDefault();

//       setError("");
//       setLoading(true);

//       try {
//         await login(
//           email,
//           password
//         );

//         navigate(
//           "/admin",
//           {
//             replace: true,
//           }
//         );
//       } catch (error) {
//         setError(
//           error.response?.data
//             ?.message ||
//             "Invalid email or password"
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//   return (
//     <div className="login-page">

//       <div className="login-card">

//         <div className="login-brand">

//           <div className="login-icon">
//             <Building2
//               size={25}
//             />
//           </div>

//           <div>
//             <h1>FIYA</h1>
//             <span>
//               BUILDERS
//             </span>
//           </div>

//         </div>

//         <div className="login-heading">
//           <h2>
//             Welcome back
//           </h2>

//           <p>
//             Sign in to manage your website.
//           </p>
//         </div>

//         {error && (
//           <div className="login-error">
//             {error}
//           </div>
//         )}

//         <form
//           onSubmit={
//             handleSubmit
//           }
//         >

//           <div className="form-group">

//             <label>
//               Email
//             </label>

//             <div className="input-wrapper">

//               <Mail size={18} />

//               <input
//                 type="email"
//                 placeholder="admin@fiyabuilders.com"
//                 value={email}
//                 onChange={(e) =>
//                   setEmail(
//                     e.target.value
//                   )
//                 }
//                 required
//               />

//             </div>

//           </div>

//           <div className="form-group">

//             <label>
//               Password
//             </label>

//             <div className="input-wrapper">

//               <Lock size={18} />

//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) =>
//                   setPassword(
//                     e.target.value
//                   )
//                 }
//                 required
//               />

//             </div>

//           </div>

//           <button
//             type="submit"
//             className="login-button"
//             disabled={loading}
//           >
//             {loading
//               ? "Signing in..."
//               : "Sign In"}
//           </button>

//         </form>

//       </div>

//     </div>
//   );
// };

// export default Login;

// src/pages/auth/Login/Login.jsx
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Building2, Lock, Mail, Eye, EyeOff, ArrowRight, Shield, CheckCircle } from "lucide-react";
import { useAuth } from "../../context/AuthContext.jsx";
import "./Login.css";

const Login = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [fyaEmail, setFyaEmail] = useState("");
  const [fyaPassword, setFyaPassword] = useState("");
  const [fyaError, setFyaError] = useState("");
  const [fyaLoading, setFyaLoading] = useState(false);
  const [fyaShowPassword, setFyaShowPassword] = useState(false);
  const [fyaRememberMe, setFyaRememberMe] = useState(false);
  const [fyaSuccess, setFyaSuccess] = useState(false);

  // Redirect if already authenticated
  if (isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  const fyaHandleSubmit = async (e) => {
    e.preventDefault();
    setFyaError("");
    setFyaLoading(true);
    setFyaSuccess(false);

    try {
      await login(fyaEmail, fyaPassword);
      setFyaSuccess(true);
      
      // Short delay before redirect for success animation
      setTimeout(() => {
        navigate("/admin", { replace: true });
      }, 500);
    } catch (error) {
      setFyaError(
        error.response?.data?.message || "Invalid email or password. Please try again."
      );
      setFyaLoading(false);
    }
  };

  const fyaTogglePassword = () => {
    setFyaShowPassword(!fyaShowPassword);
  };

  // Handle demo login
  const fyaHandleDemoLogin = () => {
    setFyaEmail("admin@fiyabuilders.com");
    setFyaPassword("password123");
  };

  return (
    <div className="fya-login">
      {/* Background Decorations */}
      <div className="fya-login__bg-decoration fya-login__bg-decoration--1" />
      <div className="fya-login__bg-decoration fya-login__bg-decoration--2" />
      <div className="fya-login__bg-decoration fya-login__bg-decoration--3" />

      <div className="fya-login__container">
        {/* Left Side - Branding */}
        <div className="fya-login__brand">
          <div className="fya-login__brand-content">
            <div className="fya-login__brand-logo">
              <div className="fya-login__brand-icon">
                <Building2 size={32} strokeWidth={2} />
              </div>
              <div className="fya-login__brand-text">
                <span className="fya-login__brand-primary">FIYA</span>
                <span className="fya-login__brand-secondary">BUILDERS</span>
              </div>
            </div>
            <div className="fya-login__brand-tagline">
              <span className="fya-login__brand-line" />
              <p>Construction • Consultancy • Civil Engineering</p>
            </div>
            <div className="fya-login__brand-features">
              <div className="fya-login__brand-feature">
                <CheckCircle size={16} />
                <span>Manage your website content</span>
              </div>
              <div className="fya-login__brand-feature">
                <CheckCircle size={16} />
                <span>Track enquiries and feedback</span>
              </div>
              <div className="fya-login__brand-feature">
                <CheckCircle size={16} />
                <span>Update projects and services</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="fya-login__form-wrapper">
          <div className="fya-login__form-card">
            {/* Header */}
            <div className="fya-login__form-header">
              <h2 className="fya-login__form-title">Welcome Back</h2>
              <p className="fya-login__form-subtitle">
                Sign in to manage your FIYA BUILDERS website.
              </p>
            </div>

            {/* Error Message */}
            {fyaError && (
              <div className="fya-login__error">
                <Shield size={16} />
                <span>{fyaError}</span>
              </div>
            )}

            {/* Success Message */}
            {fyaSuccess && (
              <div className="fya-login__success">
                <CheckCircle size={16} />
                <span>Login successful! Redirecting...</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={fyaHandleSubmit} className="fya-login__form" noValidate>
              {/* Email Field */}
              <div className="fya-login__field">
                <label htmlFor="fya-email" className="fya-login__label">
                  Email Address
                </label>
                <div className={`fya-login__input-wrapper ${fyaError ? "fya-login__input-wrapper--error" : ""}`}>
                  <Mail size={18} className="fya-login__input-icon" />
                  <input
                    id="fya-email"
                    type="email"
                    className="fya-login__input"
                    placeholder="admin@fiyabuilders.com"
                    value={fyaEmail}
                    onChange={(e) => setFyaEmail(e.target.value)}
                    required
                    autoFocus
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="fya-login__field">
                <div className="fya-login__field-header">
                  <label htmlFor="fya-password" className="fya-login__label">
                    Password
                  </label>
                  {/* <a href="#" className="fya-login__forgot">
                    Forgot Password?
                  </a> */}
                </div>
                <div className={`fya-login__input-wrapper ${fyaError ? "fya-login__input-wrapper--error" : ""}`}>
                  <Lock size={18} className="fya-login__input-icon" />
                  <input
                    id="fya-password"
                    type={fyaShowPassword ? "text" : "password"}
                    className="fya-login__input"
                    placeholder="Enter your password"
                    value={fyaPassword}
                    onChange={(e) => setFyaPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="fya-login__toggle-password"
                    onClick={fyaTogglePassword}
                    aria-label={fyaShowPassword ? "Hide password" : "Show password"}
                  >
                    {fyaShowPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="fya-login__options">
                <label className="fya-login__checkbox">
                  <input
                    type="checkbox"
                    checked={fyaRememberMe}
                    onChange={(e) => setFyaRememberMe(e.target.checked)}
                  />
                  <span>Remember me</span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="fya-login__submit"
                disabled={fyaLoading}
              >
                {fyaLoading ? (
                  <>
                    <span className="fya-login__spinner" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight size={18} />
                  </>
                )}
              </button>

              {/* Demo Credentials */}
              <div className="fya-login__demo">
                <span className="fya-login__demo-label">Demo Credentials</span>
                <button
                  type="button"
                  className="fya-login__demo-btn"
                  onClick={fyaHandleDemoLogin}
                >
                  <Building2 size={14} />
                  <span>Fill Demo Credentials</span>
                </button>
              </div>
            </form>

            {/* Footer */}
            <div className="fya-login__footer">
              <span>Protected by SSL encryption</span>
              <span className="fya-login__footer-dot">•</span>
              <span>v1.0.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;