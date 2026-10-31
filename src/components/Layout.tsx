import { Outlet } from "react-router-dom";
import NavbarComp from "./Navbar";
/* import { useMediaQuery } from "@react-hook/media-query";
import MobilSideBar from "./MobilSideBar"; */
import "../App.css";

export default function Layout() {
  /* const location = useLocation(); */
  /* const isMobile = useMediaQuery("only screen and (max-width: 900px)"); */

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarComp />
      <div className="flex flex-1">
        <main className="grow p-4 md:mt-0 flex flex-col justify-center items-center ">
          <Outlet />
        </main>
      </div>
      <div className="text-black text-center text-tiny italic">
        CSP CAPA v2.1a Powered by IT department
      </div>
    </div>
  );
}
