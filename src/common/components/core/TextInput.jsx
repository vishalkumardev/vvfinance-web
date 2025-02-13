import React from "react";
import Errortext from "./ErrorText";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

function TextInput({ className, ...props }) {
  return (
    <div className="my-2 w-full">
      <Label htmlFor={props.id}>{props.label}</Label>
      <Input {...props} className={className} />
      {props.touched && props.errors ? (
        <Errortext error={props.errors} />
      ) : null}
    </div>
  );
}

export default TextInput;
