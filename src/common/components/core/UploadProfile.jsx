import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Errortext from "./ErrorText";
import { Button } from "../ui/button";
import { toast } from "react-toastify";

function UploadProfile(props) {
  const { Url, setUrl, message } = props;

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      // Validate file type (only images in this case, you can change this)
      if (file && file.type.startsWith("image/")) {
        setUrl(file);
      } else {
        toast.error("Please upload a valid image file.");
        setUrl(null); // Clear file if invalid
      }
    },
    [setUrl]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="upload-document-container ">
      <label className="mb-2 text-sm font-semibold text-black dark:text-white">
        {props.label}
      </label>

      <div
        {...getRootProps()}
        className="dropzone-area   border-dashed border border-gray-400 w-36 h-36  flex justify-center items-center my-2 "
      >
        <input {...getInputProps()} />
        <div className={`dropzone-inner ${isDragActive ? "active" : ""}`}>
          {Url ? (
            <img
              className="object-contain w-36 h-36 "
              src={typeof Url == "string" ? Url : URL.createObjectURL(Url)}
            />
          ) : (
            <p className="text-xs text-center">
              {message ?? "Drag & drop an image here, or click to select."}
            </p>
          )}
        </div>
      </div>

      {/* Error message display */}
      {props.touched && props.errors ? (
        <Errortext error={props.errors} />
      ) : null}
    </div>
  );
}

export default UploadProfile;
