"use client"; // Required for useEffect in App Router

import { useEffect, useState } from "react";
import api from "../../utils/api";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.get("/test")
      .then((response) => setMessage(response.data.message))
      .catch((error) => console.error("Error fetching from backend:", error));
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold">{message || "Loading..."}</h1>
    </div>
  );
}
