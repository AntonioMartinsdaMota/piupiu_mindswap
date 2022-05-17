import { useState, useEffect } from "react";
import { getServerSideProps } from "next";

function PostSubmitForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [user, setUser] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    

    fetch("/api/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title,
            content,
            user,
        }),
    })
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
        }

        );
    }

  
  

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch("/api/users/me");
      const json = await response.json();
      const user = json._id;
      setUser(user);
    };

    getUser();
  }, []);

  return (
    <div>
      <h1>Post Submit Form</h1>
      <form>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Content</label>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button onClick={handleSubmit}>Submit</button>
        </form>
    </div>
    );
}
  
export default PostSubmitForm;
