import styles from "./Header.module.css";
import { useState } from "react";
import Router from "next/router";

function PageHeader() {
  const [bar, setbar] = useState(false);

  function togle() {
    setbar(!bar);
  }

  function handleClick(e) {
    e.preventDefault();
    togle();
    Router.push("/profile");
  }

  return (
    <>
      <div className={styles.logo}>
        <img
          src="https://i.ibb.co/Kw0hNY6/logo-Final-Qualidade.png"
          height={47}
          alt=""
        />

        <img
          className={styles.icon}
          src="https://i.ibb.co/Qd7Q4Vn/settings.png"
          height={20}
          alt=""
        />
        <img
          className={styles.icon}
          onClick={handleClick}
          src="https://i.ibb.co/DYJjNyN/user.png"
          height={20}
          alt=""
        />
      </div>
      <input
        id="searchbar"
        className={bar ? styles.search : styles.searchbar}
        type="text"
        placeholder="🔍  Search"
      />
    </>
  );
}

export default PageHeader;
