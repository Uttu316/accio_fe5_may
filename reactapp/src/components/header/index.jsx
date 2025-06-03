import { useLocation } from "react-router";
import Logo from "../logo";
import { lazy, Suspense } from "react";
const NavBar = lazy(() => import("../navBar"));
import "./header.css";

const Header = () => {
  const { pathname } = useLocation();

  const isLoginPage = pathname === "/login";

  return (
    <div className={"header"}>
      <Logo />
      <Suspense fallback={<h4>Loading...</h4>}>
        {!isLoginPage && <NavBar />}
      </Suspense>
    </div>
  );
};

export default Header;
