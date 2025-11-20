"use client";

import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  async function askBackend() {
    const res = await fetch("http://localhost:8000/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });
    const data = await res.json();
    setResponse(data.answer);
  }

  return (
    <main className="p-10 space-y-4">
      <h1 className="text-3xl font-bold">CampusGPT</h1>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 w-1/2"
        placeholder="Ask something..."
      />

      <button
        onClick={askBackend}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Ask
      </button>

      {response && (
        <div className="mt-4 p-4 border rounded">
          <p>{response}</p>
        </div>
      )}
    </main>
  );
}
