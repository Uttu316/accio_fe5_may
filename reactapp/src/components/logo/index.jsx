import { Link } from "react-router";
import logo from "../../assets/logo.webp";
import "./logo.css";
const Logo = () => {
  return (
    <div className={"logo"}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
};
export default Logo;
