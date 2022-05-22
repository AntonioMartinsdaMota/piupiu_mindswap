import Router from "next/router";
import { useState, useEffect } from "react";
import styles from "./login.module.css";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      setUsername("");
      setPassword("");
    }
  }, [loggedIn]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    validateUser(username, password);

    async function validateUser(username, password) {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        Router.push("/home");
      } else {
        setError("Invalid username or password");
      }
      setLoading(false);
    }
  };

  return (
    <div className={styles.boxLogin}>
      <div className={styles.cardLogin}>
        <div className={styles.imgChange}>
          <img
            src="https://i.ibb.co/Kw0hNY6/logo-Final-Qualidade.png"
            alt="image logo"
          ></img>
        </div>

        <h2 className={styles.text}>#piupiu</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.inputText}
            placeholder="Username"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className={styles.inputPass}
            placeholder="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className={styles.formActions}>
            <button
              className={styles.btnLogin}
              type="submit"
              disabled={loading}
            >
              {loading ? "Loading..." : "Log in"}
            </button>

            <a className={styles.btnSign} href="/signup">
              {" "}
              Don't have an account?
            </a>

            {error && <p className={styles.error}>{error}</p>}
          </div>
        </form>

        <footer className={styles.footer}>
          <p>Powered by MindSwap 2022</p>
        </footer>
      </div>
    </div>
  );
}

export default LoginForm;
