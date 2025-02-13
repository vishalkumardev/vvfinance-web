import * as Yup from "yup";

const sessionValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Session name is required")
    .min(3, "Session name must be at least 3 characters long"),

  description: Yup.string()
    .required("Session description is required")
    .min(10, "Session description must be at least 10 characters long"),

  date: Yup.date().required("Date is required"),

  time: Yup.string().required("Time is required"),

  duration: Yup.string().required("Duration is required"),

  unit: Yup.string()
    .oneOf(["hrs", "mins"], "Unit must be either 'hrs' or 'mins'")
    .required("Unit is required"),

  thumbnail: Yup.string().required("Thumbnail URL is required"),

  status: Yup.string()
    .oneOf(["private", "public"], "Status must be either 'private' or 'public'")
    .required("Status is required"),

  introVideoId: Yup.string().required("Intro video ID is required"),

  numberOfSeats: Yup.number()
    .required("Number of seats is required")
    .integer("Number of seats must be an integer")
    .positive("Number of seats must be a positive number"),

  meetingLink: Yup.string()
    .url("Meeting link must be a valid URL")
    .required("Meeting link is required"),
});

export default sessionValidationSchema;
