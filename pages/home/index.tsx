import PostList from "../../components/PostList/postList";
import PostSubmitForm from "../../components/PostSubmit/postSubmitForm";
import PageHeader from "../../components/Header/FeedHeader";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div>
      <PageHeader />
      <PostSubmitForm />
      <PostList />
      <Footer />
    </div>
  );
}

export default Home;
