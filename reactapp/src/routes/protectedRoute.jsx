import { Navigate, Outlet } from "react-router";
import { isLoggedIn } from "../utils/auth";

const ProtectedRoute = () => {
  const isUserLoggedin = isLoggedIn();

  if (!isUserLoggedin) {
    return <Outlet />; // child component
  }
  return <Navigate to="/" replace={true} />; // redirect to login page
};

export default ProtectedRoute;
