import TextInput from "@/common/components/core/TextInput";
import { Button } from "@/common/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/common/components/ui/card";
import { Label } from "@/common/components/ui/label";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import loginSchema from "../../app/validation/loginSchema";
import PasswordInput from "../../common/components/core/PasswordInput";
import { useLoginMutation } from "../../features/auth/api/AuthApi";

const Login = () => {
  const [login, { isLoading }] = useLoginMutation();
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
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        const response = await login(values);

        const { success, data } = response?.data;

        if (success) {
          resetForm();
          navigate(`/dashboard`);
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    },
  });
  return (
    <div className="flex flex-row justify-center items-center h-screen font-[family-name:var(--font-geist-sans)]">
      <Card className="w-[350px] ">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login into your account</CardDescription>
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
          <PasswordInput
            label="Password"
            placeholder="Enter your Password"
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            errors={errors.password}
            touched={touched.password}
          />

          <Link to="/user/forgot" target="" className="flex justify-end my-4">
            <Label htmlFor="email">Forgot Password ?</Label>
          </Link>

          <Button
            className="w-full mt-4"
            onClick={handleSubmit}
            loading={isLoading}
          >
            Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
