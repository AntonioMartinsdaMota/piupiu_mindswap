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

                <img src={post.user.avatar} alt="avatar" />
                  {post.user.name} 
                  {post.user.role}
                  <LikeButton id={post._id}/>    
                </h2>
                <div>
                <p> {post.likes.length} likes </p>
                </div>

                  <img
                    className={styles.avatar}
                    src={post.user.avatar}
                    alt="avatar"
                  />
                  <span className={styles.userName}>{post.user.name}</span>
                  <span className={styles.role}>{post.user.role}</span>
                  <span className={styles.space}></span>
                  <a
                    className={styles.commentsCount}
                    href={`postPage/${post._id}`}
                  >
                    {" "}
                    {post.comments.length} Comments
                  </a>
                  <LikeButton />
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
