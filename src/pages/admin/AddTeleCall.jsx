import React, { useState } from "react";
import { useFormik } from "formik";
import { Button } from "@/common/components/ui/button";
import { useNavigate } from "react-router-dom";
import UploadDocument from "../../common/components/core/UploadDocument";
import { useCreateLoanMutation } from "../../features/loan/api/loanApi";
import { fileSchema } from "../../app/validation/fileSchema";
import { useCreateTellecallMutation } from "../../features/telecall/api/teleCallApi";

const AddTeleCall = () => {
  const [createTellecall, { isLoading }] = useCreateTellecallMutation();
  const navigate = useNavigate();

  const { values, errors, touched, handleSubmit, resetForm, setFieldValue } =
    useFormik({
      initialValues: {
        file: "",
      },
      validationSchema: fileSchema,
      onSubmit: async (values) => {
        try {
          const formData = new FormData();

          formData.append("file", values.file);

          const response = await createTellecall(formData);

          const { success } = response.data;

          if (success) {
            resetForm();
            navigate(`/dashboard/telecall`);
          }
        } catch (e) {
          console.log(e);
        }
      },
    });

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-xl font-semibold">Upload Telecalling Data</h2>
      <div className="space-y-6">
        <UploadDocument
          label="Upload Excel File"
          Url={values.file}
          setUrl={(file) => setFieldValue("file", file)}
          errors={errors.file}
          touched={touched.file}
        />

        <Button
          type="submit"
          className="px-8 py-2 bg-blue-600 text-white"
          onClick={handleSubmit}
          loading={isLoading}
        >
          Upload file
        </Button>
      </div>
    </div>
  );
};

export default AddTeleCall;
