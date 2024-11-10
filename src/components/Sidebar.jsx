import { Heart, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <DesktopSidebar />
      <MobileSidebar />
    </div>
  );
};

const DesktopSidebar = () => {
  return (
    <div className="p-3 md:p-10 border-r min-h-screen w-24 md:w-52 lg:w-64 hidden sm:block">
      <div className="flex flex-col gap-20 sticky top-10 left-0">
        <div className="w-full">
          <img src="/logo.svg" alt="" className="md:block hidden" />
          <img src="/mobile-logo.svg" alt="" className="md:hidden block" />
        </div>

        <div>
          <ul className="flex flex-col gap-8 font-bold items-center md:items-start">
            <Link to={"/"} className="flex gap-2">
              <Home />
              <span className="hidden sm:block">Home</span>
            </Link>
            <Link to={"/favorites"} className="flex gap-2">
              <Heart />
              <span className="hidden sm:block">Favorites</span>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

const MobileSidebar = () => {
  return (
    <div className="sm:hidden flex fixed p-2 bottom-0 w-full border-slate-400 border-t gap-8 justify-center items-center z-50 bg-white">
      <Link to={"/"}>
        <Home className="cursor-pointer" />
      </Link>
      <Link to={"/favorites"}>
        <Heart className="cursor-pointer" />
      </Link>
    </div>
  );
};

export default Sidebar;
