import { useState, useEffect } from "react";
import styles from "./post.module.css";
// import styles from "./Avatar.module.css";
// import avatar from "../profile/Avatar";

// import avatar
function Post(props) {
  const { id } = props;

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);
  const [postLoaded, setPostLoaded] = useState(false);

  async function getPost(postId) {
    const response = await fetch(`/api/posts/${postId}`);
    const data = await response.json();
    const commentArray = data.comments;
    setComments(commentArray);
    console.log(commentArray);
    setPost(data);
  }

  if (!postLoaded) {
    getPost(id);
    setPostLoaded(true);
  }

  // useEffect(() => {
  //     fetch(`api/posts/${id}`)
  //     .then(res => res.json())
  //     .then(data => {
  //         setPost(data);
  //         setComments(data.comments);
  //     })
  // }, [id]);

  return (
    <>
      {/* <div className={styles.boxCard}> */}
      {post && (
        <div className={styles.boxPost}>
          <div>
            <img
              src="https://i.ibb.co/Kw0hNY6/logo-Final-Qualidade.png"
              height={47}
              alt=""
            />
          </div>

          <div className={styles.boxNameMain}>
            <h1 className={styles.userNameMain}>
              Username: <span className={styles.user}>{post?.user?.name} </span>
            </h1>
            <p className={styles.comments}>{post?.content}</p>
          </div>

          <h2 className={styles.commentsTitle}>Comments: </h2>
          {comments &&
            comments.map((comment) => (
              <div className={styles.boxUser} key={comment.id}>
                {" "}
                <h3 className={styles.username}>
                  Username:{" "}
                  <span className={styles.user}> {comment.user.name} </span>
                </h3>
                <p className={styles.commentsUser}>{comment.content}</p>
              </div>
            ))}
        </div>
      )}
      {/* </div> */}
    </>
  );
}

export default Post;
