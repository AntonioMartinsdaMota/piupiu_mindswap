
import { useState, useEffect } from "react";

function PostList() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((json) => {
        setPosts(json.data);
        setLoading(false);
      });
  }
  , [posts]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (

        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
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


  