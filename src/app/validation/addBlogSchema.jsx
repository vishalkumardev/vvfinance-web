import * as Yup from "yup";

export const addBlogSchema = Yup.object({
  title: Yup.string().required("Title cannot be empty"),
  content: Yup.string().required("Content cannot be empty"),
  banner: Yup.string().required("Banner is required"), // Image validation
});
