import {
  Album,
  Bell,
  BrainCog,
  ChartNoAxesCombined,
  FileIcon,
  GalleryVerticalEnd,
  Home,
  MonitorCog,
  Phone,
  StoreIcon,
  Users,
} from "lucide-react";

const adminMenu = [
  {
    id: 1,
    label: "Dashboard",
    path: "/dashboard/",
    icon: <Home size={24} />,
  },
  {
    id: 2,
    label: "Clients",
    path: "/dashboard/clients",
    icon: <StoreIcon size={24} />,
  },
  {
    id: 3,
    label: "Loans",
    path: "/dashboard/loans",
    icon: <FileIcon size={24} />,
  },
  {
    id: 4,
    label: "Telecall",
    path: "/dashboard/telecall",
    icon: <Phone size={24} />,
  },
  {
    id: 5,
    label: "Reports",
    path: "/dashboard/reports",
    icon: <ChartNoAxesCombined size={24} />,
  },
  // {
  //   id: 12,
  //   label: "Notifications",
  //   path: "/dashboard/notifications",
  //   icon: <Bell size={24} />,
  // },
  {
    id: 6,
    label: "Users",
    path: "/dashboard/users",
    icon: <Users size={24} />,
  },
];

export default adminMenu;
