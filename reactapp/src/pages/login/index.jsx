import { useState } from "react";
import styles from "./login.module.css";
import Header from "../../components/header";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    if (username === "user" && password === "12345") {
      const token = "uciuroiwuvmrbuier1313hfvd";
      localStorage.setItem("token", token);
      navigate("/", {
        replace: true
      });
    }
  };

  return (
    <div>
      <Header />
      <div className={styles.loginPage}>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <h1 className={styles.loginTitle}>Login</h1>
          <div className={styles.inputGroup}>
            <label htmlFor="username" className={styles.inputLabel}>
              Username
            </label>
            <input
              type="text"
              id="username"
              className={styles.inputField}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.inputLabel}>
              Password
            </label>
            <input
              type="password"
              id="password"
              className={styles.inputField}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
