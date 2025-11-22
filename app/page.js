"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [text, setText] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("sticky-note-text");
    if (saved) setText(saved);
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
    localStorage.setItem("sticky-note-text", e.target.value);
  };

  return (
    <div className="w-screen h-screen bg-note-yellow p-4 shadow-lg rounded-lg">
      <textarea
        className="w-full h-full bg-transparent border-none rounded-lg outline-none resize-none text-l text-white font-semibold"
        value={text}
        onChange={handleChange}
      ></textarea>
    </div>
  );
}
