import React from "react";

function Thumbnail({ url }) {
  return (
    <img className="w-full rounded-t-md" src={url} alt="course-thumbnail" />
  );
}

export default Thumbnail;
