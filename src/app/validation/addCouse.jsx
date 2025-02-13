import * as Yup from "yup";

export const addCourseSchema = Yup.object({
  name: Yup.string().required("Course name is required"),
  description: Yup.string().required("Course description is required"),
  startDate: Yup.date().required("Start date is required"),
  endDate: Yup.date()
    .required("End date is required")
    .min(Yup.ref("startDate"), "End date cannot be before start date"),
  duration: Yup.number()
    .required("Duration is required")
    .positive("Duration must be positive"),
  unit: Yup.string().required("Unit is required"),
  category: Yup.string().required("Category is required"),
  price: Yup.number()
    .required("Price is required")
    .min(0, "Price must be a positive number"),
  thumbnail: Yup.string().required("Image must be specified"),
  paid: Yup.boolean(),
  status: Yup.string().required("Visibility must be a Required"),
  playListId: Yup.string().required("Youtube Playlist Id must be a Required"),
  introVideoId: Yup.string().required("Youtube Video Id must be a Required"),
});
