const adminRoutes = {
  admin: "/admin",
  dashboard: "/admin/dashboard",
  course: "/admin/dashboard/course",
  courseDetail: "/admin/dashboard/course/:courseId",
  addCourse: "/admin/dashboard/course/add",
  addModule: "/admin/dashboard/module/add/:courseId",
  workshop: "/admin/dashboard/workshop",
  assignment: "/admin/dashboard/assignment",
  hackathon: "/admin/dashboard/hackathon",
  jobs: "/admin/dashboard/jobs",
  internship: "/admin/dashboard/internship",
  courseModule: "/admin/dashboard/course/:courseId/view/:moduleId",
};

export default Object.freeze(adminRoutes);
