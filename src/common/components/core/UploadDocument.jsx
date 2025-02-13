import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Errortext from "./ErrorText";
import { toast } from "react-toastify";

function UploadDocument(props) {
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
      <label className="mb-2 text-sm font-semibold">{props.label}</label>

      <div
        {...getRootProps()}
        className="dropzone-area w-full  border-dashed border-2 border-gray-400 min-h-96 flex justify-center items-center my-2  rounded-lg"
      >
        <input {...getInputProps()} />
        <div className={`dropzone-inner ${isDragActive ? "active" : ""}`}>
          {Url ? (
            <img
              className="object-cover w-full h-full"
              src={URL.createObjectURL(Url)}
            />
          ) : (
            <p>{message ?? "Drag & drop an image here, or click to select."}</p>
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

export default UploadDocument;
