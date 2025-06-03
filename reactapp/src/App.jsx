import "./App.css";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
const Home = lazy(() => import("./pages/home"));
const Plans = lazy(() => import("./pages/plans"));
const Login = lazy(() => import("./pages/login"));
const Profile = lazy(() => import("./pages/profile"));
const NotFound = lazy(() => import("./pages/notFound"));
import PrivateRoute from "./routes/privateProute";
import ProtectedRoute from "./routes/protectedRoute";
import Router from "./routes";

import ErrorBoundary from "./errorBoundaries";

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/plans" element={<Plans />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Router>
    </ErrorBoundary>
  );
};
export default App;
