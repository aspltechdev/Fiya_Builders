import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  loginAdmin,
  getCurrentUser,
} from "../services/auth.api.js";

const AuthContext =
  createContext(null);

export const AuthProvider = ({
  children,
}) => {
  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const token =
      localStorage.getItem(
        "fiya_token"
      );

    if (!token) {
      setLoading(false);
      return;
    }

    getCurrentUser()
      .then((response) => {
        setUser(response.data);
      })
      .catch(() => {
        localStorage.removeItem(
          "fiya_token"
        );

        localStorage.removeItem(
          "fiya_user"
        );

        setUser(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const login = async (
    email,
    password
  ) => {
    const response =
      await loginAdmin(
        email,
        password
      );

    const {
      token,
      user,
    } = response.data;

    localStorage.setItem(
      "fiya_token",
      token
    );

    localStorage.setItem(
      "fiya_user",
      JSON.stringify(user)
    );

    setUser(user);

    return user;
  };

  const logout = () => {
    localStorage.removeItem(
      "fiya_token"
    );

    localStorage.removeItem(
      "fiya_user"
    );

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};