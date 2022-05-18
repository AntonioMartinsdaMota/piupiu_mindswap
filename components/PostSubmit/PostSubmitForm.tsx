import { useState, useEffect } from "react";
// import { getServerSideProps } from "next";
import styles from "./PostSubmit.module.css";

function PostSubmitForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [user, setUser] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
        user,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  }

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch("/api/users/me");
      const json = await response.json();
      const user = json._id;
      setUser(user);
    };

    getUser();
  }, []);

  return (
    <div className={styles.box}>
      <form className={styles.post}>
        {/* <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br /> */}
        <textarea
          // type="text"
          className={styles.text}
          value={content}
          placeholder="whats new?"
          onChange={(e) => setContent(e.target.value)}
        />
        <button className={styles.submitButton} onClick={handleSubmit}>
          <img src="https://i.ibb.co/hKyfFrs/botao.png" alt="" />
        </button>
      </form>
    </div>
  );
}

export default PostSubmitForm;
