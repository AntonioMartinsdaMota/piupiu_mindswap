import Router from "next/router";
import { useState, useEffect } from "react";
import styles from "./signup.module.css";

function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  async function postUser() {
    setLoading(true);
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, confirmPassword }),
    });
    const data = await response.json();
    if (data.error) {
      setError(data.error);
      setLoading(false);
    } else {
      setSuccess(data.message);
      setLoading(false);
      alert("Successfully registered");
      Router.push("/");
    }
  }

  useEffect(() => {
    if (success) {
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  }, [success]);

  function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      postUser();
    }
  }

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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className={styles.inputText}
            placeholder="Email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={styles.inputPass}
            placeholder="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className={styles.inputPass}
            placeholder="Password"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <div className={styles.formActions}>
            <button
              className={styles.btnLogin}
              type="submit"
              disabled={loading}
            >
              {loading ? "Loading..." : "SIGN UP"}
            </button>

            <a className={styles.btnSign} href="/">
              {" "}
              I already have an account
            </a>

            {error && <p className={styles.error}>{error}</p>}
          </div>
        </form>
        <footer className={styles.footer}>
          <p>Powered by MindSwap 2022</p>
        </footer>

        {/* {error && <div className="alert alert-danger">{error}</div>} */}
        {success && <div className="alert alert-success">{success}</div>}
        {loading && <div className="alert alert-info">Loading...</div>}
      </div>
    </div>
  );
}

export default SignUpForm;
