import styles from "./PostList.module.css";
import { useState, useEffect } from "react";
import { Router } from "next/router";

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
                <h2 className={styles.h1}>{post.user.name}</h2>
                <p>{post.content}</p>
                {/* <a href={`api/posts/${post._id}`}> {post.comments.length} comments</a> */}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default PostList;
