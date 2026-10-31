import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@heroui/react";

/* import { useTranslation } from 'react-i18next'; */
/* import { useBoundStore } from "../store/BoundStore/BoundedStore"; */

export default function NavbarComp() {
  return (
    <div className="text-3xl lg:text-2xl flex gap-2 bg-[#F1F4F7]">
      <>
        <Navbar isBordered maxWidth="full">
          <NavbarContent>
            <NavbarMenuToggle className="sm:hidden" />
            <NavbarBrand className="flex gap-4">
              <img src="/cspLogo.png" alt="CSP LOGO" width={35} />
              <p className="font-medium text-black text-xl flex justify-center items-center">
                <Link to="/">PRESS SCOREBOARD</Link>
              </p>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden sm:flex lg:gap-20">
            <NavbarItem className="flex justify-center items-center gap-2 text-black font-medium">
              <Link to="/csp/scoreboard/1">Press 1</Link>
            </NavbarItem>
            <NavbarItem className="flex justify-center items-center gap-2 text-black font-medium">
              <Link to="/csp/scoreboard/2">Press 2</Link>
            </NavbarItem>
            <NavbarItem className="flex justify-center items-center gap-2 text-black font-medium">
              <Link to="/csp/scoreboard/3">Press 3</Link>
            </NavbarItem>
            <NavbarItem className="flex justify-center items-center gap-2 text-black font-medium">
              <Link to="/csp/scoreboard/4">Press 4</Link>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </>
    </div>
  );
}
