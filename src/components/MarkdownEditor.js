import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState("");   // State for input
  const [preview, setPreview] = useState("");     // State for live preview

  // Update preview whenever markdown input changes
  useEffect(() => {
    setPreview(markdown);
  }, [markdown]);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="markdown-editor">
      <div className="editor-section">
        <h2>Markdown Input</h2>
        <textarea
          className="textarea"
          value={markdown}
          onChange={handleChange}
          placeholder="Write your markdown here..."
        />
      </div>

      <div className="preview-section">
        <h2>Live Preview</h2>
        <div className="preview">
          <ReactMarkdown>{preview}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default MarkdownEditor;
