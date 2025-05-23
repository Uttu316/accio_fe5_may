import Badge from "../badge";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <button className="navAction">Go Premium</button>
      <span className="navItem">
        Activity
        <Badge count={5} />
      </span>
      <span className="navItem">
        Inbox
        <Badge count={4} />
      </span>
      <span className="navItem active">
        Opportinities <Badge count={120} />
      </span>
      <span className="navItem">Profile</span>
    </div>
  );
};

export default NavBar;
