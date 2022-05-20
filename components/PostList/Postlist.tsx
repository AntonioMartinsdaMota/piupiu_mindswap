import styles from "./PostList.module.css";
import { useState, useEffect } from "react";
import LikeButton from "../LikeButton";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((json) => {
        setPosts(json.data);
        console.log(json.data);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.frame}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="Post">
          {Array.from(posts)
            .reverse()
            .map((post, index) => (
              <div className={styles.comment} key={index}>
                <h2 className={styles.h1}>
                  <img
                    className={styles.avatar}
                    src={post.user.avatar}
                    alt="avatar"
                  />
                  <span className={styles.userName}>{post.user.name}</span>
                  <span className={styles.role}>{post.user.role}</span>
                  <span className={styles.space}></span>

                  <div className={styles.commentsCount}>
                    <p className={styles.likes}>
                      {" "}
                      {post.likes.length} likes{" "}
                      <a
                        className={styles.commentsLenght}
                        href={`postPage/${post._id}`}
                      >
                        {" "}
                        {post.comments.length} Comments
                      </a>
                    </p>
                  </div>
                  <LikeButton className={styles.btnLike} id={post._id} />
                </h2>
                <p>{post.content}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default PostList;
