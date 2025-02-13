import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(8).required("Password is required"),
});

export default loginSchema;
