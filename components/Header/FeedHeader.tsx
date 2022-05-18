import styles from "./Header.module.css";

function PageHeader() {
  return (
    <>
      <div className={styles.logo}>
        <img
          src="https://i.ibb.co/Kw0hNY6/logo-Final-Qualidade.png"
          height={60}
          alt=""
        />
        <input
          className={styles.searchbar}
          type="text"
          placeholder="🔍  Search"
        />
        <img
          className={styles.icon}
          src="https://i.ibb.co/LNv9shj/search.png"
          height={20}
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
          src="https://i.ibb.co/DYJjNyN/user.png"
          height={20}
          alt=""
        />
      </div>
    </>
  );
}

export default PageHeader;
