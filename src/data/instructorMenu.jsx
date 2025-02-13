import {
  Bell,
  Home,
  User,
  GalleryVerticalEnd,
  MonitorCog,
  BrainCog,
} from "lucide-react";

const instructorMenu = [
  {
    id: 1,
    label: "Dashboard",
    path: "/instructor/dashboard/",
    icon: <Home size={24} />,
  },
  {
    id: 2,
    label: "Courses",
    path: "/instructor/dashboard/course",
    icon: <GalleryVerticalEnd size={24} />,
  },
  {
    id: 3,
    label: "Workshops",
    path: "/instructor/dashboard/workshop",
    icon: <MonitorCog size={24} />,
  },
  {
    id: 4,
    label: "Session",
    path: "/instructor/dashboard/session",
    icon: <BrainCog size={24} />,
  },
  {
    id: 5,
    label: "Profile",
    path: "/instructor/dashboard/profile",
    icon: <User size={24} />,
  },
  {
    id: 6,
    label: "Notifications",
    path: "/instructor/dashboard/notifications",
    icon: <Bell size={24} />,
  },
];

export default instructorMenu;
