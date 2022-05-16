import PostList from "../../components/feed/postList";
import PostSubmitForm from "../../components/feed/postSubmitForm";

function Feed() {
  return (
    <div>
      <h1>Home Page</h1>
      <PostSubmitForm />
      <PostList />
    </div>
  );
}

export default Feed;



