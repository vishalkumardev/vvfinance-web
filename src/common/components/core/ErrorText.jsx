import React from "react";

function Errortext(props) {
  return (
    <p className="text-sm mt-2 text-red-500 font-normal ">{props.error}</p>
  );
}

export default Errortext;
