import React from "react";

function Status({ status }) {
  return (
    <p
      className={`${
        status == "approved"
          ? "text-green-600"
          : status == "rejected"
          ? "text-red-500"
          : ""
      } capitalize font-normal`}
    >
      {status}
    </p>
  );
}

export default Status;
