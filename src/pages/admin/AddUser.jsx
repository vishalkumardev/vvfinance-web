import React from "react";
import { useFormik } from "formik";
import { Button } from "@/common/components/ui/button";
import TextInput from "@/common/components/core/TextInput";
import { useRegisterMutation } from "../../features/auth/api/AuthApi";
import Dropdown from "../../common/components/core/Dropdown";
import UploadProfile from "../../common/components/core/UploadProfile";
import registerSchema from "../../app/validation/register";
import UploadImage from "../../common/components/core/UploadImage";

const RegisterUser = () => {
  const [register, { isLoading }] = useRegisterMutation();

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
      adhaarNumber: "",
      panNo: "",
      profilePicture: "",
      adhaarFront: "",
      adhaarBack: "",
      panFront: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("password", values.password);
        formData.append("address", values.address);
        formData.append("phone", values.phone);
        formData.append("role", values.role);
        formData.append("adhaarNumber", values.adhaarNumber);
        formData.append("panNo", values.panNo);
        formData.append("profilePicture", values.profilePicture);
        formData.append("adhaarFront", values.adhaarFront);
        formData.append("adhaarBack", values.adhaarBack);
        formData.append("panFront", values.panFront);

        const response = await register(formData);
        const { success } = response.data;
        if (success) {
          resetForm();
          navigate(`/dashboard/users`);
        }
      } catch (error) {
        console.error("Registration failed:", error);
      }
    },
  });

  return (
    <div className="container mx-auto p-5 max-w-7xl">
      <h2 className="text-xl font-semibold mb-6">Register User</h2>
      <form className="" onSubmit={handleSubmit}>
        <div className="space-y-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <UploadProfile
            label="Profile Picture"
            message="Drag and drop your profile picture here, or click to select."
            touched={touched}
            Url={values.profilePicture}
            errors={errors.profilePicture}
            setUrl={(url) => setFieldValue("profilePicture", url)}
          />

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

          <Dropdown
            name="role"
            id="role"
            label="Select Role"
            placeholder="Select Role"
            value={values.role}
            onChange={(e) => setFieldValue("role", e)}
            onBlur={handleBlur}
            options={[
              { value: "admin", label: "Admin" },
              { value: "agent", label: "Agent" },
              { value: "telecaller", label: "Telecaller" },
            ]}
            errors={errors.role}
            touched={touched.role}
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
            name="phone"
            label="Phone Number"
            placeholder="Enter your phone number"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors.phone}
            touched={touched.phone}
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
            name="panNo"
            label="PAN Number"
            placeholder="Enter your PAN number"
            value={values.panNo}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors.panNo}
            touched={touched.panNo}
          />

          <TextInput
            name="adhaarNumber"
            label="Adhaar Number"
            placeholder="Enter your Adhaar number"
            value={values.adhaarNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors.adhaarNumber}
            touched={touched.adhaarNumber}
          />

          <UploadImage
            label="Upload PAN Card Front Image"
            Url={values.panFront}
            setUrl={(file) => setFieldValue("panFront", file)}
            errors={errors.panFront}
            touched={touched.panFront}
          />

          <UploadImage
            label="Upload Adhaar Card Front Image"
            Url={values.adhaarFront}
            setUrl={(file) => setFieldValue("adhaarFront", file)}
            errors={errors.adhaarFront}
            touched={touched.adhaarFront}
          />

          <UploadImage
            label="Upload Adhaar Card Back Image"
            Url={values.adhaarBack}
            setUrl={(file) => setFieldValue("adhaarBack", file)}
            errors={errors.adhaarBack}
            touched={touched.adhaarBack}
          />

          <Button
            type="submit"
            className="w-full bg-blue-600 text-white py-2"
            loading={isLoading}
          >
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterUser;
