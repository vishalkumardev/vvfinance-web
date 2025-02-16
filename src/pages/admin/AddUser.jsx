import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/common/components/ui/button";
import TextInput from "@/common/components/core/TextInput";
import { useRegisterMutation } from "../../features/auth/api/AuthApi";
import Dropdown from "../../common/components/core/Dropdown";

const RegisterUser = () => {
  const [register, { isLoading }] = useRegisterMutation();

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    address: Yup.string().required("Address is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    role: Yup.string()
      .oneOf(["admin", "agent", "telecaller"], "Invalid role")
      .required("Role is required"),
  });

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      address: "",
      phone: "",
      role: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await register(values);

        const { success } = response.data;

        if (success) {
          resetForm();
          navigate(`/admin/dashboard/users`);
        }
      } catch (error) {
        console.error("Registration failed:", error);
      }
    },
  });

  return (
    <div className="container mx-auto p-5 max-w-md">
      <h2 className="text-xl font-semibold mb-6">Register User</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <TextInput
          name="name"
          label="Full Name"
          placeholder="Enter your name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors.name}
          touched={touched.name}
        />

        <TextInput
          name="email"
          type="email"
          label="Email Address"
          placeholder="Enter your email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors.email}
          touched={touched.email}
        />

        <TextInput
          name="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors.password}
          touched={touched.password}
        />

        <TextInput
          name="address"
          label="Address"
          placeholder="Enter your address"
          value={values.address}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors.address}
          touched={touched.address}
        />

        <TextInput
          name="phone"
          label="Phone Number"
          placeholder="Enter your phone number"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors.phone}
          touched={touched.phone}
        />

        <Dropdown
          name="role"
          id="role"
          label="Select Role"
          placeholder="Select Role"
          value={values.role}
          onChange={(e) => {
            setFieldValue("role", e);
          }}
          onBlur={handleBlur}
          options={[
            { value: "admin", label: "Admin" },
            { value: "agent", label: "Agent" },
            { value: "telecaller", label: "Telecaller" },
          ]}
          errors={errors.role}
          touched={touched.role}
        />

        <Button
          type="submit"
          className="w-full bg-blue-600 text-white py-2"
          loading={isLoading}
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterUser;
