import React, { useState, useEffect } from "react";
import { ReactMarkdown } from "react-markdown";
import '../styles/App.css';

function App() {
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => setMarkdown(e.target.value);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <div><h1>Loading...</h1></div>;

  return (
    <div className="app">
      <textarea onChange={handleChange} />
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

export default App;
