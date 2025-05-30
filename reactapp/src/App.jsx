import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home";
import Plans from "./pages/plans";
import Login from "./pages/login";
import Profile from "./pages/profile";
import NotFound from "./pages/notFound";
import PrivateRoute from "./routes/privateProute";
import ProtectedRoute from "./routes/protectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/plans" element={<Plans />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
