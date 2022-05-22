import { useState, useEffect } from "react";
import styles from "./Avatar.module.css";

function Avatar() {
  const [user, setUser] = useState({});
  const [avatar, setAvatar] = useState(null);

  async function getUser() {
    const response = await fetch("api/me");
    const json = await response.json();
    const user = json.data;
    return user;
  }

  useEffect(() => {
    getUser().then((user) => {
      setUser(user);
      setAvatar(user.avatar);
    });
  }, []);

  return (
    <div className={styles.avatar}>
      <img className={styles.profileImage} src={avatar} alt="avatar" />
    </div>
  );
}

export default Avatar;
