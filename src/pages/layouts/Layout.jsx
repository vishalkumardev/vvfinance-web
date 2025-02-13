import { CircleUser, LogOut, Menu, Search } from "lucide-react";
import { Button } from "@/common/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/common/components/ui/dropdown-menu";
import { Input } from "@/common/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/common/components/ui/sheet";
import { Link, Outlet, useNavigate } from "react-router-dom";
import useMenu from "../../common/hooks/useMenu";
import Logo from "../../common/components/Logo";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/common/components/ui/tooltip";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/slice/authSlice";
import { ModeToggle } from "../../common/components/ModeToggle";

export default function page() {
  const { role } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const menu = useMenu(role);
  const router = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    router("/");
  };

  return (
    <TooltipProvider>
      <div className="grid min-h-screen w-full md:grid-cols-[70px_1fr] sticky left-0">
        <div className="hidden border-r bg-muted/40 md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex flex-col h-14 items-center justify-center border-b lg:h-[60px] w-full">
              <Logo />
            </div>
            <nav className="flex flex-col items-center justify-between  space-y-5 ">
              {menu?.map((data) => (
                <Link
                  key={data.id}
                  to={data.path}
                  className="text-muted-foreground transition-all hover:text-primary"
                >
                  <Tooltip>
                    <TooltipTrigger> {data?.icon}</TooltipTrigger>
                    <TooltipContent>
                      <p>{data?.label}</p>
                    </TooltipContent>
                  </Tooltip>
                </Link>
              ))}

              <div className="absolute bottom-5">
                <button
                  variant="primary"
                  size="large"
                  className="text-muted-foreground transition-all hover:text-primary"
                  onClick={handleLogout}
                >
                  <LogOut />
                </button>
              </div>
            </nav>
          </div>
        </div>
        <div className="flex flex-col ">
          <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 ">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="flex flex-col font-[family-name:var(--font-geist-sans)]"
              >
                <nav className="grid gap-2 text-lg font-medium">
                  <Logo />
                  {menu?.map((data) => (
                    <Link
                      key={data.id}
                      to={data.path}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                    >
                      {data.icon}
                      {data.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <div className="w-full flex-1"></div>
            <DropdownMenu className="">
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleLogout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <ModeToggle />
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}
