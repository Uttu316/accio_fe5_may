import { useLocation } from "react-router";
import Logo from "../logo";
import NavBar from "../navBar";
import "./header.css";

const Header = () => {
  const { pathname } = useLocation();

  const isLoginPage = pathname === "/login";

  return (
    <div className={"header"}>
      <Logo />
      {!isLoginPage && <NavBar />}
    </div>
  );
};

export default Header;
