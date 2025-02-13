import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/common/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/common/components/ui/card";
import { Showtoast } from "../../common/hooks/useToast";
import PasswordInput from "../../common/components/core/PasswordInput";
import { useResetPasswordMutation } from "../../features/auth/api/AuthApi";
import { passwordResetSchema } from "../../app/validation/passwordResetSchema";

const PasswordReset = () => {
  const { token } = useParams();
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const navigate = useNavigate();

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    touched,
    errors,
    resetForm,
  } = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: passwordResetSchema, // Add a validation schema for password reset
    onSubmit: async (values) => {
      try {
        // Simulate an API call for password reset
        const response = await resetPassword({
          token,
          password: values?.password,
        });
        const { success } = response?.data;

        if (success) {
          resetForm(); // Reset form if login is successful
          navigate(`/user/login`); // Redirect user to login page
        }
      } catch (e) {
        Showtoast("error", e.message);
      }
    },
  });

  return (
    <div className="flex flex-row justify-center items-center h-screen font-[family-name:var(--font-geist-sans)]">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Reset Password</CardTitle>
          <CardDescription>Enter your new password</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Password Field */}
          <PasswordInput
            label="Password"
            placeholder="Enter your new password"
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            errors={errors.password}
            touched={touched.password}
          />
          {/* Confirm Password Field */}
          <PasswordInput
            label="Confirm Password"
            placeholder="Re-enter your new password"
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword}
            errors={errors.confirmPassword}
            touched={touched.confirmPassword}
          />
          <Button
            className="w-full mt-4"
            onClick={handleSubmit}
            loading={isLoading}
          >
            Reset Password
          </Button>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Remember your password?{" "}
            <span
              className="text-blue-500 cursor-pointer underline"
              onClick={() => navigate("/user/login")}
            >
              Login
            </span>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PasswordReset;
