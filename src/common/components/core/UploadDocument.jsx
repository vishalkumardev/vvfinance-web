import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Errortext from "./ErrorText";
import { toast } from "react-toastify";

function UploadDocument(props) {
  const { Url, setUrl, message } = props;

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      if (
        file &&
        (file.type ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
          file.type === "application/vnd.ms-excel")
      ) {
        setUrl(file);
      } else {
        toast.error("Please upload a valid Excel file (.xlsx or .xls).");
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
            <p>{Url?.name}</p>
          ) : (
            <p>{message ?? "Drag & drop an file here, or click to select."}</p>
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
