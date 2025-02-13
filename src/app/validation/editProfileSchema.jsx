import * as yup from "yup";

import * as Yup from "yup";

export const basicDetailsSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  picUrl: Yup.string(),
  userName: Yup.string().required("Username is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must be numeric")
    .required("Phone number is required"),
});

export const socialLinksSchema = Yup.object().shape({
  githubUrl: Yup.string().url("Must be a valid URL").required("GitHub URL is required"),
  linkedInUrl: Yup.string().url("Must be a valid URL").required("LinkedIn URL is required"),
  twitterUrl: Yup.string().url("Must be a valid URL").nullable(),
  leetCodeUrl: Yup.string().url("Must be a valid URL").nullable(),
});

export const professionalDetailsSchema = Yup.object().shape({
  headLine: Yup.string().required("Headline is required"),
  bio: Yup.string().required("Bio is required"),
  portfolioWebsite: Yup.string().url("Must be a valid URL").nullable(),
});
