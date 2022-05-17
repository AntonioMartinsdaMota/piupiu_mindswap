import PostList from "../../components/home/postList";
import PostSubmitForm from "../../components/home/postSubmitForm";
import  FeedHeader from "../../components/home/FeedHeader";
import FeedFooter from "../../components/home/FeedFooter";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <PostSubmitForm />
      <PostList />
    </div>
  );
}

export default Home;



