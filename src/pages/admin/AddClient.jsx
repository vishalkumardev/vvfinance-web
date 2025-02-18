import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/common/components/ui/button";
import TextInput from "@/common/components/core/TextInput";
import { useCreateClientMutation } from "../../features/client/api/clientApi";
import { useNavigate } from "react-router-dom";

const AddClient = () => {
  const [createClient, { isLoading }] = useCreateClientMutation();
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    name: Yup.string().required("Client name is required"),
    key: Yup.string().required("API key is required"),
  });

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      name: "",
      key: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await createClient(values);
        const { success } = response.data;

        if (success) {
          resetForm();
          navigate(`/dashboard/clients`);
        }
      } catch (error) {
        console.error("Failed to add client:", error);
      }
    },
  });

  return (
    <div className="container mx-auto p-5 max-w-md">
      <h2 className="text-xl font-semibold mb-6">Add Client</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <TextInput
          name="name"
          label="Client Name"
          placeholder="Enter client name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors.name}
          touched={touched.name}
        />

        <TextInput
          name="key"
          label="Key"
          placeholder="Enter  key"
          value={values.key}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors.key}
          touched={touched.key}
        />

        <Button
          type="submit"
          className="w-full bg-blue-600 text-white py-2"
          loading={isLoading}
        >
          Add Client
        </Button>
      </form>
    </div>
  );
};

export default AddClient;
