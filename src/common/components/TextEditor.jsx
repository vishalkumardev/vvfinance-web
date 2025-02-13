import React from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import QuillToolbar, { formats, modules } from "./EditorToolbar";

const TextEditor = ({ ...props }) => {
  return (
    <div>
      <QuillToolbar /> {/* Custom Toolbar */}
      <ReactQuill
        {...props}
        modules={modules} // Use the configured modules
        formats={formats} // Add supported formats
      />
      <div className="editor-output">
        <h3>Editor Content:</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: props?.value,
          }}
        />
      </div>
    </div>
  );
};

export default TextEditor;
