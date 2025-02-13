const userRoutes = {
  user: "/user",
  dashboard: "/user/dashboard",
  course: "/user/dashboard/course",
  courseDetail: "/user/dashboard/course/:courseId",
  courseModule: "/user/dashboard/course/:courseId/view/:moduleId",
  workshop: "/user/dashboard/workshop",
  certificate: "/user/dashboard/certificate",
  assignment: "/user/dashboard/assignment",
  profile: "/user/dashboard/profile",
  hackathon: "/user/dashboard/hackathon",
  jobs: "/user/dashboard/jobs",
  internship: "/user/dashboard/internship",
};

export default Object.freeze(userRoutes);
