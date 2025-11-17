"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      router.push("/dashboard"); // Redirect to dashboard after login
    } catch (error) {
      setError("Invalid email or password. ");
      console.log(error);
    }
  };

  return (
    <div className="max-w-sm mx-auto p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
      {error && <p className="text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="w-full py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
