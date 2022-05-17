import Router from "next/router";
import { useState, useEffect } from "react";

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
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-actions">
          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Login"}
          </button>
          {error && <p className="error">{error}</p>}
        </div>
        <a href="/signup">
          <button type="button">SignUp</button>
        </a>
      </form>
    </div>
  );
}

export default LoginForm;
