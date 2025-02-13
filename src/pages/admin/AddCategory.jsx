import React, { useState } from "react";
import { useFormik } from "formik";
import { Button } from "@/common/components/ui/button";
import TextInput from "@/common/components/core/TextInput";
import { addCategorychema } from "@/app/validation/addCategory";
import { useNavigate } from "react-router-dom";
import { useCreateCategoryMutation } from "../../features/category/api/categoryApi";

const AddCategory = () => {
  const [createCategory, { isLoading }] = useCreateCategoryMutation();
  const navigate = useNavigate();

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
    },
    validationSchema: addCategorychema,
    onSubmit: async (values) => {
      try {
        const response = await createCategory(values);

        const { success } = response.data;

        if (success) {
          resetForm();
          navigate(`/admin/dashboard/category`);
        }
      } catch (e) {
        console.log(e);
      }
    },
  });

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-xl font-semibold mb-8">Add a New Category</h2>
      <div className="space-y-6">
        <TextInput
          name="name"
          id="name"
          label="Category Name"
          placeholder="Enter Category name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors.name}
          touched={touched.name}
        />

        <Button
          type="submit"
          className="px-8 py-2 bg-blue-600 text-white"
          onClick={handleSubmit}
          loading={isLoading}
        >
          Add Category
        </Button>
      </div>
    </div>
  );
};

export default AddCategory;
