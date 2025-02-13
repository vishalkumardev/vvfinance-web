import React from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
function Editor({ ...props }) {
  return <ReactQuill {...props} />;
}

export default Editor;
