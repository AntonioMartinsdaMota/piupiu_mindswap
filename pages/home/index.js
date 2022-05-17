import PostList from "../../components/home/postList";
import PostSubmitForm from "../../components/home/postSubmitForm";
import  FeedHeader from "../../components/home/FeedHeader";
import FeedFooter from "../../components/home/FeedFooter";
import PageHeader from "../../components/home/FeedHeader";

function Home() {
  return (
    <div>
      <PageHeader/>
      <PostSubmitForm />
      <PostList />
    </div>
  );
}

export default Home;



