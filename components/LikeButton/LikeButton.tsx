import { useState } from "react";
import styles from "./button.module.css";

function LikeButton() {
  const [like, setLike] = useState(false);

  function toggle() {
    setLike(!like);
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
