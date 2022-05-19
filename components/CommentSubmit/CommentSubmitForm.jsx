import { Router } from "next/router";
import { useState, useEffect } from "react";
import styles from "../PostSubmit/PostSubmit.module.css";

function CommentSubmitForm(props) {

  const { id } = props;
  const [content, setContent] = useState("");

  console.log(id);
  function refreshPage() {
    window.location.reload();
  }

  console.log(content);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(content);
    

    try{
      fetch(`http://localhost:3000/api/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          console.log("Comment submitted");
        });

    } catch(err){
      console.log(err);
    }

    refreshPage();
  }

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

export default CommentSubmitForm;
