"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then(res => res.json())
      .then(json => setData(json.message))
  }, []);

  return (
    <main className="flex items-center justify-center h-screen">
      <h1 className="text-3xl font-semibold">{data}</h1>
    </main>
  );
}
