import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Eye, EyeOff } from "lucide-react";
import Errortext from "./ErrorText";

function PasswordInput({ className, ...props }) {
  const [visibility, setVisibility] = useState(false);

  const toggleVisibility = () => setVisibility(!visibility);
  return (
    <div className="my-2 w-full relative">
      <Label htmlFor={props.id}>{props.label}</Label>
      <Input
        {...props}
        className={className}
        type={visibility ? "text" : "password"}
      />
      {props.touched && props.errors ? (
        <Errortext error={props.errors} />
      ) : null}

      <button
        className="absolute top-10 right-4 text-muted-foreground/80 transition-shadow hover:text-foreground"
        type="button"
        onClick={toggleVisibility}
        aria-label={visibility ? "Hide password" : "Show password"}
        aria-pressed={visibility}
        aria-controls="password"
      >
        {visibility ? (
          <EyeOff
            size={18}
            strokeWidth={2}
            aria-hidden="true"
            role="presentation"
          />
        ) : (
          <Eye
            size={18}
            strokeWidth={2}
            aria-hidden="true"
            role="presentation"
          />
        )}
      </button>
    </div>
  );
}

export default PasswordInput;
