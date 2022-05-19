import { Router } from "next/router";
import { useState, useEffect } from "react";
import styles from "./PostSubmit.module.css";

function PostSubmitForm() {
  const [content, setContent] = useState("");

  function refreshPage(){
    window.location.reload();
  }



  function handleSubmit(e) {
    e.preventDefault();

    fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content
      }),
       
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });

      refreshPage();
      
  }

  // useEffect(() => {
  //   const getUser = async () => {
  //     const response = await fetch("/api/users/me");
  //     const json = await response.json();
  //     const user = json._id;
  //     setUser(user);
  //   };

  //   getUser();
  // }, []);

  return (
    <div className={styles.box}>
      <form className={styles.post}>
        <textarea
          className={styles.text}
          value={content}
          placeholder="whats new?"
          onChange={(e) => setContent(e.target.value)}
        />
        <button className={styles.submitButton} onClick={handleSubmit}>
          <img src="https://i.ibb.co/hKyfFrs/botao.png" alt="" />
        </button>
      </form>
      <div className={styles.footer}>
        <p>™ Developed By MindSwap 2022</p>
      </div>
    </div>
  );
}

export default PostSubmitForm;
