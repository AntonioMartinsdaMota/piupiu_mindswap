import { useState, useEffect } from "react";
import styles from "./About.module.css";

function About() {
  const [user, setUser] = useState({});

  async function getUser() {
    const response = await fetch("api/me");
    const json = await response.json();
    setUser(json.data);
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className={styles.cardLogin}>
      <h1>About</h1>

      <div>
        <p>
          Username: <br />
          {user.name}{" "}
        </p>
        <p>
          Email: <br />
          {user.email}
        </p>
        <p>
          Role: <br />
          {user.role}
        </p>
        <p>
          About: <br />
          {user.about}
        </p>
      </div>
    </div>
  );
}

export default About;
