import { useState } from "react";

function LikeButton() {
  const [like, setLike] = useState(false);

  function toggle() {
    setLike(!like);
  }

  return (
    <button onClick={toggle}>
      {" "}
      <img
        src={
          like
            ? "https://i.ibb.co/jLhSDMH/like-Toggle-On.png"
            : "https://i.ibb.co/FwJxyh9/like-Toggle-Off.png"
        }
        alt=""
      />
    </button>
  );
}

export default LikeButton;
