// import { useState, useEffect } from "react";
// import api from "../utils/api";

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// export function useAuth() {
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);

//   // Load user from localStorage when the hook is first used
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//     setLoading(false);
//   }, []);

//   const login = async (email: string, password: string) => {
//     try {
//       const response = await api.post("/auth/login", { email, password });
//       const { access_token, user } = response.data;

//       localStorage.setItem("token", access_token);
//       localStorage.setItem("user", JSON.stringify(user)); // Store user info
//       setUser(user);
//       return user;
//     } catch (error) {
//       console.error("Login failed:", error);
//       throw error;
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     setUser(null);
//   };

//   return { user, loading, login, logout };
// }
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
