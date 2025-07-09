"use client"
import { useState, useEffect } from "react";

export function ActiveReaders() {
  const [activeReaders, setActiveReaders] = useState("12.3K");
  
  useEffect(() => {
    setActiveReaders(`${(Math.random() * (18.5 - 12.3) + 12.3).toFixed(1)}K`);
  }, []);

  return <p className="text-2xl font-bold">{activeReaders}</p>;
}
