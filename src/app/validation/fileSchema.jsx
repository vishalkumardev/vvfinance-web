import * as Yup from "yup";

export const fileSchema = Yup.object({
  file: Yup.string().required("File is required"), // Image validation,
  client: Yup.string().required("Client is required"), // Dropdown validation,
});
