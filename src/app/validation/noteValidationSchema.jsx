import * as Yup from "yup";

const addNoteValidation = Yup.object({
  content: Yup.string().trim().required("Note cannot be empty"),
});

export default addNoteValidation;
