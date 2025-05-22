import Logo from "../logo";
import NavBar from "../navBar";
import "./header.css";

const Header = () => {
  return (
    <div className={"header"}>
      <Logo />
      <NavBar />
    </div>
  );
};

export default Header;
