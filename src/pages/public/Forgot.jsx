import { Button } from "@/common/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/common/components/ui/card";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import TextInput from "../../common/components/core/TextInput";
import sendLinkShcema from "../../app/validation/sendLink";
import { useForgotPasswordMutation } from "../../features/auth/api/AuthApi";

const Forgot = () => {
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
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
      email: "",
    },
    validationSchema: sendLinkShcema,
    onSubmit: async (values) => {
      try {
        // Simulate an API call for password reset
        const response = await forgotPassword(values);
        const { success } = response?.data;
        if (success) {
          resetForm();
          navigate(`/user/login`);
        }
      } catch (error) {
        console.log("error", error.message);
      }
    },
  });

  return (
    <div className="flex flex-row justify-center items-center h-screen font-[family-name:var(--font-geist-sans)]">
      <Card className="w-[350px] ">
        <CardHeader>
          <CardTitle>Forgot Password</CardTitle>
          <CardDescription>
            Don&apos;t Worry ! Its human Behaviour
          </CardDescription>
        </CardHeader>

        <CardContent>
          <TextInput
            label="Email"
            placeholder="Enter your Email"
            id="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            errors={errors.email}
            touched={touched.email}
          />
          <Button
            className="w-full mt-4"
            onClick={handleSubmit}
            loading={isLoading}
          >
            Send Reset Link
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Forgot;
