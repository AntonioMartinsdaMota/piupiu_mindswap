import { useState } from "react";
import styles from "./button.module.css";

function LikeButton(props) {
  const [like, setLike] = useState(false);
  const { id } = props;

  function toggle() {
    setLike(!like);
    fetchData();
  }

    async function fetchData() {
      const postId = id;
      const response = await fetch(`/api/posts/${postId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        
      });
return response.json();

    }


         
  

  return (
    <button className={styles.like} onClick={toggle}>
      {" "}
      <img
        src={
          like
            ? "https://i.ibb.co/jLhSDMH/like-Toggle-On.png"
            : "https://i.ibb.co/FwJxyh9/like-Toggle-Off.png"
        }
        height={30}
        alt=""
      />
    </button>
  );
}

export default LikeButton;
