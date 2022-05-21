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
    <div className={styles.aboutCard}>
      <div className={styles.aboutHeader}>
        <p>info</p>
      </div>
<div className={styles.content}>
      <div className={styles.label}>
        <p>
          username:
        </p>
        <p>
          e-mail:
        </p>
        <p>
          role: 
        </p>
        <p>
          about: 
        </p>
      </div>

      <div className={styles.info}>
        <p>
          {user.name}
        </p>
        <p>
          {user.email}
        </p>
        <p>
          {user.role}
        </p>
        <p>
          {user.about}
        </p>

        </div>

    </div>
    </div>
  );
}

export default About;
