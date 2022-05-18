import styles from "./PostList.module.css";
import { useState, useEffect } from "react";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const score = 0;

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((json) => {
        setPosts(json.data);
        setLoading(false);
      });
  }, [posts]);

  return (
    <div className={styles.frame}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="Post">
          {posts.map((post, index) => (
            <div className={styles.comment} key={index}>
              <h2 className={styles.h1}>{post.title}</h2>
              <p>{post.content}</p>
              <p>{post.user}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PostList;
