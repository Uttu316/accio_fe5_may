import { NavLink, useNavigate } from "react-router";
import Badge from "../badge";
import "./navbar.css";
import { isLoggedIn } from "../../utils/auth";

const NavBar = () => {
  const navigate = useNavigate();

  const isUserLoggedin = isLoggedIn();

  const onGoPremium = () => {
    navigate("/plans");
  };

  return (
    <div className="navbar">
      <button onClick={onGoPremium} className="navAction">
        Go Premium
      </button>
      <NavLink
        to="/activity"
        className={({ isActive }) => `navItem ${isActive ? "active" : ""}`}
      >
        Activity
        <Badge count={5} />
      </NavLink>
      <NavLink
        to="/inbox"
        className={({ isActive }) => `navItem ${isActive ? "active" : ""}`}
      >
        Inbox
        <Badge count={4} />
      </NavLink>

      <NavLink
        to="/"
        className={({ isActive }) => `navItem ${isActive ? "active" : ""}`}
      >
        Opportinities <Badge count={100} />
      </NavLink>
      {isUserLoggedin && (
        <NavLink
          to="/profile"
          className={({ isActive }) => `navItem ${isActive ? "active" : ""}`}
        >
          Profile
        </NavLink>
      )}
      {!isUserLoggedin && (
        <NavLink
          to="/login"
          className={({ isActive }) => `navItem ${isActive ? "active" : ""}`}
        >
          Login
        </NavLink>
      )}
    </div>
  );
};

export default NavBar;
