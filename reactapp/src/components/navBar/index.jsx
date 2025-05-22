import Badge from "../badge";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <button className="navAction">Go Premium</button>
      <span className="navItem">Activity</span>
      <span className="navItem active">
        Opportinities <Badge />
      </span>
      <span className="navItem">Profile</span>
    </div>
  );
};

export default NavBar;
