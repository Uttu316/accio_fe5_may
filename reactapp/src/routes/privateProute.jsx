import { Navigate, Outlet } from "react-router";
import { isLoggedIn } from "../utils/auth";

const PrivateRoute = () => {
  const isUserLoggedin = isLoggedIn();

  if (isUserLoggedin) {
    return <Outlet />; // child component
  }
  return <Navigate to="/login" replace={true} />; // redirect to login page
};

export default PrivateRoute;
