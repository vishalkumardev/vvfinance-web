import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/common/components/ui/select";
import { Label } from "../ui/label";
import Errortext from "./ErrorText";

function Dropdown({ className, options, onChange, placeholder, ...props }) {
  return (
    <div className="my-2 w-full">
      <Label htmlFor={props?.id}>{props?.label}</Label>
      <Select onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options?.map((option, index) => (
            <SelectItem key={index} value={option.value}>
              {option?.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {props?.touched && props?.errors ? (
        <Errortext error={props?.errors} />
      ) : null}
    </div>
  );
}

export default Dropdown;
