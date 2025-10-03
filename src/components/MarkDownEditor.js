import React, { useState, useEffect } from "react";
import { marked } from "marked";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");
  const [preview, setPreview] = useState("");


  useEffect(() => {
    setPreview(marked(markdown));
  }, [markdown]);

  return (
    <div className="editor-container">
    
      <textarea
        className="markdown-input"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Type your Markdown here..."
      />

    
      <div
        className="markdown-preview"
        dangerouslySetInnerHTML={{ __html: preview }}
      ></div>
    </div>
  );
};

export default MarkdownEditor;
