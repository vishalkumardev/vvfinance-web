import {
  Bell,
  Home,
  User,
  GalleryVerticalEnd,
  MonitorCog,
  Album,
  BrainCog,
} from "lucide-react";

const studentMenu = [
  {
    id: 1,
    label: "Dashboard",
    path: "/user/dashboard/",
    icon: <Home size={24} />,
  },
  {
    id: 2,
    label: "Courses",
    path: "/user/dashboard/course",
    icon: <GalleryVerticalEnd size={24} />,
  },
  {
    id: 3,
    label: "Workshops",
    path: "/user/dashboard/workshop",
    icon: <MonitorCog size={24} />,
  },
  {
    id: 10,
    label: "Session",
    path: "/user/dashboard/session",
    icon: <BrainCog size={24} />,
  },
  {
    id: 6,
    label: "Certificate",
    path: "/user/dashboard/certificate",
    icon: <Album size={24} />,
  },
  {
    id: 4,
    label: "Profile",
    path: "/user/dashboard/profile",
    icon: <User size={24} />,
  },
  {
    id: 11,
    label: "Notifications",
    path: "/user/dashboard/notifications",
    icon: <Bell size={24} />,
  },
  // {
  //   id: 5,
  //   label: "Assignment",
  //   path: "/user/dashboard/assignment",
  // },
  // {
  //   id: 7,
  //   label: "Jobs",
  //   path: "/user/dashboard/jobs",
  // },
  // {
  //   id: 8,
  //   label: "Internship",
  //   path: "/user/dashboard/internship",
  // },
  // {
  //   id: 9,
  //   label: "Hackathon",
  //   path: "/user/dashboard/hackathon",
  // },
];

export default studentMenu;
