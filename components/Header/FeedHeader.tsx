import styles from "./Header.module.css";

function PageHeader() {
  return (
    <>
      <div className={styles.logo}>
        <img src="https://i.ibb.co/3c94bFF/logo.png" height={75} alt="" />
        <input
          className={styles.searchbar}
          type="text"
          placeholder="🔍  Search"
        />
      </div>
    </>
  );
}

export default PageHeader;
