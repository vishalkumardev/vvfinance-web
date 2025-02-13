import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Text from "./Text";

function Link({ children, className, ...props }) {
  return (
    <RouterLink to={props.to} className={`${className}  py-1`} {...props}>
      <p className=" text-primary text-[14px] font-poppins font-medium">
        {props.title}
      </p>
    </RouterLink>
  );
}

export default Link;
