import * as yup from "yup";

const registerSchema = yup.object().shape({
  name: yup.string().max(30).min(3).required("Full name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(8).required("Password is required"),
});

export default registerSchema;
