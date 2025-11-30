"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [versions, setVersions] = useState<any[]>([]);

  const fetchVersions = async () => {
    const res = await fetch("/api/versions");
    const data = await res.json();
    setVersions(data);
  };

  const saveVersion = async () => {
    const res = await fetch("/api/save-version", {
      method: "POST",
      body: JSON.stringify({ text }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    setVersions(prev => [...prev, data.entry]);
  };

  useEffect(() => {
    fetchVersions();
  }, []);

  return (
    <main style={{ padding: "40px", maxWidth: "700px", margin: "auto" }}>
      <h1>Mini Audit Trail Generator</h1>
      <p>Type something and save versions to see history.</p>

      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        style={{
          width: "100%",
          height: "150px",
          margin: "20px 0",
          padding: "10px",
          fontSize: "16px",
        }}
        placeholder="Write something..."
      />

      <button
        onClick={saveVersion}
        style={{
          padding: "10px 20px",
          background: "black",
          color: "white",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Save Version
      </button>

      <h2 style={{ marginTop: "40px" }}>Version History</h2>

      {versions.length === 0 && <p>No versions yet.</p>}

      {versions.map(v => (
        <div
          key={v.id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            borderRadius: "6px",
            marginBottom: "15px",
          }}
        >
          <p><b>Timestamp:</b> {v.timestamp}</p>
          <p><b>Added:</b> {v.addedWords.join(", ") || "None"}</p>
          <p><b>Removed:</b> {v.removedWords.join(", ") || "None"}</p>
          <p><b>Old Length:</b> {v.oldLength}</p>
          <p><b>New Length:</b> {v.newLength}</p>
        </div>
      ))}
    </main>
  );
}
