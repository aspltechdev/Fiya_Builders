import {
  Navigate,
  Outlet,
} from "react-router-dom";

import {
  useAuth,
} from "../../context/AuthContext.jsx";

const ProtectedRoute = () => {
  const {
    isAuthenticated,
    loading,
  } = useAuth();

  if (loading) {
    return (
      <div className="admin-loading">
        Loading...
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/admin/login"
        replace
      />
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;