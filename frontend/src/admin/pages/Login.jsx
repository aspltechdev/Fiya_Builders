import {
  useState,
} from "react";

import {
  Navigate,
  useNavigate,
} from "react-router-dom";

import {
  Building2,
  Lock,
  Mail,
} from "lucide-react";

import {
  useAuth,
} from "../../context/AuthContext.jsx";

const Login = () => {
  const {
    login,
    isAuthenticated,
  } = useAuth();

  const navigate =
    useNavigate();

  const [
    email,
    setEmail,
  ] = useState("");

  const [
    password,
    setPassword,
  ] = useState("");

  const [
    error,
    setError,
  ] = useState("");

  const [
    loading,
    setLoading,
  ] = useState(false);

  if (isAuthenticated) {
    return (
      <Navigate
        to="/admin"
        replace
      />
    );
  }

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      setError("");
      setLoading(true);

      try {
        await login(
          email,
          password
        );

        navigate(
          "/admin",
          {
            replace: true,
          }
        );
      } catch (error) {
        setError(
          error.response?.data
            ?.message ||
            "Invalid email or password"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-brand">

          <div className="login-icon">
            <Building2
              size={25}
            />
          </div>

          <div>
            <h1>FIYA</h1>
            <span>
              BUILDERS
            </span>
          </div>

        </div>

        <div className="login-heading">
          <h2>
            Welcome back
          </h2>

          <p>
            Sign in to manage your website.
          </p>
        </div>

        {error && (
          <div className="login-error">
            {error}
          </div>
        )}

        <form
          onSubmit={
            handleSubmit
          }
        >

          <div className="form-group">

            <label>
              Email
            </label>

            <div className="input-wrapper">

              <Mail size={18} />

              <input
                type="email"
                placeholder="admin@fiyabuilders.com"
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
                required
              />

            </div>

          </div>

          <div className="form-group">

            <label>
              Password
            </label>

            <div className="input-wrapper">

              <Lock size={18} />

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                required
              />

            </div>

          </div>

          <button
            type="submit"
            className="login-button"
            disabled={loading}
          >
            {loading
              ? "Signing in..."
              : "Sign In"}
          </button>

        </form>

      </div>

    </div>
  );
};

export default Login;