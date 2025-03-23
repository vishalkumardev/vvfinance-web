import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/common/components/ui/button";
import TextInput from "@/common/components/core/TextInput";
import {
  useCreateClientMutation,
  useUpdateClientMutation,
  useGetClientByIdQuery,
} from "../../features/client/api/clientApi";
import { useNavigate, useParams } from "react-router-dom";

const ClientForm = () => {
  const { clientId } = useParams();
  const navigate = useNavigate();

  const [createClient, { isLoading: creating }] = useCreateClientMutation();
  const [updateClient, { isLoading: updating }] = useUpdateClientMutation();
  const { data: clientData, isFetching } = useGetClientByIdQuery(clientId, {
    skip: !clientId,
  });

  const isEditMode = Boolean(clientId);
  const isLoading = creating || updating || isFetching;

  const validationSchema = Yup.object({
    name: Yup.string().required("Client name is required"),
    key: Yup.string().required("API key is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      key: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        let response;

        if (isEditMode) {
          response = await updateClient({ clientId, ...values });
        } else {
          response = await createClient(values);
        }

        const { success } = response.data;
        if (success) {
          formik.resetForm();
          navigate(`/dashboard/clients`);
        }
      } catch (error) {
        console.error("Failed to save client:", error);
      }
    },
  });

  // Prefill form in edit mode
  useEffect(() => {
    if (isEditMode && clientData?.data) {
      formik.setValues({
        name: clientData.data.name || "",
        key: clientData.data.key || "",
      });
    }
  }, [clientData, isEditMode]);

  return (
    <div className="container mx-auto p-5 max-w-md">
      <h2 className="text-xl font-semibold mb-6">
        {isEditMode ? "Edit Client" : "Add Client"}
      </h2>

      <form className="space-y-4" onSubmit={formik.handleSubmit}>
        <TextInput
          name="name"
          label="Client Name"
          placeholder="Enter client name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errors={formik.errors.name}
          touched={formik.touched.name}
        />

        <TextInput
          name="key"
          label="API Key"
          placeholder="Enter API key"
          value={formik.values.key}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errors={formik.errors.key}
          touched={formik.touched.key}
        />

        <Button
          type="submit"
          className="w-full bg-blue-600 text-white py-2"
          loading={isLoading}
        >
          {isEditMode ? "Update Client" : "Add Client"}
        </Button>
      </form>
    </div>
  );
};

export default ClientForm;
