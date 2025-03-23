import * as yup from "yup";

const registerSchema = yup.object().shape({
  name: yup.string().max(30).min(3).required("Full name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(8).required("Password is required"),
  role: yup
    .string()
    .oneOf(["admin", "agent", "telecaller"], "Invalid role")
    .required("Role is required"),
  adhaarNumber: yup
    .string()
    .required("Invalid Adhaar number")
    .max(12, "Invalid Adhaar number")
    .min(12, "Invalid Adhaar number"),
  panNo: yup
    .string()
    .required("Invalid PAN number")
    .max(10, "Invalid PAN number")
    .min(10, "Invalid PAN number"),
  address: yup.string().required("Address is required"),
  phone: yup
    .string()
    .max(10)
    .required("Phone is required")
    .min(10, "Invalid phone number"),
  profilePicture: yup.string().required("Profile picture is required"),
  adhaarFront: yup.string().required("Adhaar front image is required"),
  adhaarBack: yup.string().required("Adhaar back image is required"),
  panFront: yup.string().required("PAN front image is required"),
});

export default registerSchema;
