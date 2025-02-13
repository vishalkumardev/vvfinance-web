import adminMenu from "@/data/adminMenu";
import instructorMenu from "@/data/instructorMenu";
import studentMenu from "@/data/studentMenu";

const useMenu = (role) => {
  if (role == "user") {
    return studentMenu;
  }

  if (role == "admin") {
    return adminMenu;
  }

  if (role == "instructor") {
    return instructorMenu;
  }
};

export default useMenu;
