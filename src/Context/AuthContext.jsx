import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

const DEFAULT_ADMIN = {
  id: "1",
  email: "admin@gymfitsport.com",
  password: "admin123",
  name: "Admin User",
  role: "admin",
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUsers = localStorage.getItem("gymfit_users");
    if (!storedUsers) {
      localStorage.setItem("gymfit_users", JSON.stringify([DEFAULT_ADMIN]));
    }

    const storedUser = localStorage.getItem("gymfit_current_user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const users = JSON.parse(localStorage.getItem("gymfit_users") || "[]");
      const foundUser = users.find(
        (u) => u.email === email && u.password === password
      );

      if (foundUser) {
        const userSession = {
          id: foundUser.id,
          email: foundUser.email,
          name: foundUser.name,
          role: foundUser.role,
        };

        setUser(userSession);
        setIsAuthenticated(true);
        localStorage.setItem(
          "gymfit_current_user",
          JSON.stringify(userSession)
        );

        return { success: true };
      } else {
        return { success: false, error: "Invalid email or password" };
      }
    } catch (error) {
      return { success: false, error: "An error occurred. Please try again." };
    }
  };

  const register = async (userData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const users = JSON.parse(localStorage.getItem("gymfit_users") || "[]");
      const existingUser = users.find((u) => u.email === userData.email);

      if (existingUser) {
        return { success: false, error: "Email already registered" };
      }

      const newUser = {
        id: Date.now().toString(),
        email: userData.email,
        password: userData.password,
        name: userData.name,
        role: "user",
      };

      users.push(newUser);
      localStorage.setItem("gymfit_users", JSON.stringify(users));

      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: "An error occurred during registration",
      };
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("gymfit_current_user");
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
