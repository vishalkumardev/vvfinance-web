import * as Yup from "yup";

export const addBlogSchema = Yup.object({
  banner: Yup.string().required("Banner is required"), // Image validation
});
