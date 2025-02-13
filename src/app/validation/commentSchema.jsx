import * as yup from "yup";

const commentSchema = yup.object().shape({
  content: yup
    .string()
    .required("Comment must be required")
    .min(3, "Comment must be greater 3 characters"),
});

export default commentSchema;
