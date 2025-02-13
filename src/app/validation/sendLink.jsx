import * as yup from "yup";

const sendLinkShcema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
});

export default sendLinkShcema;
