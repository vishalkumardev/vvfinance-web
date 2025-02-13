import React from "react";
import Errortext from "./ErrorText";
import { Label } from "../ui/label";
import { Textarea as TextArea } from "../ui/textarea";

function Textarea({ className, ...props }) {
  return (
    <div className="my-2 w-full">
      <Label htmlFor={props.id}>{props.label}</Label>
      <TextArea {...props} className={className} />
      {props.touched && props.errors ? (
        <Errortext error={props.errors} />
      ) : null}
    </div>
  );
}

export default Textarea;
