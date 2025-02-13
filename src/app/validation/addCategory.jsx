import * as Yup from "yup";

export const addCategorychema = Yup.object().shape({
  name: Yup.string().required("Category name is required"),
});
