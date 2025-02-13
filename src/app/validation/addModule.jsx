import * as Yup from "yup";

export const addModuleSchema = Yup.object().shape({
  name: Yup.string().required("Module name is required"),
  description: Yup.string().required("Module description is required"),
  duration: Yup.number()
    .required("Duration is required")
    .positive("Duration must be positive"),
  unit: Yup.string()
    .oneOf(["hrs", "mins"], "Invalid unit")
    .required("Unit must be Required"),
  videoId: Yup.string().required("Video Id is required"),
  published: Yup.string().required("Visibility must be Required"),
});
