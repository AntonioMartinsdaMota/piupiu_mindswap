import PostList from "../../components/PostList/postList";
import PostSubmitForm from "../../components/PostSubmit/PostSubmitForm";
import PageHeader from "../../components/Header/FeedHeader";
import Footer from "../../components/Footer";
import style from "./home.module.css";

function Home() {
  return (
    <div className={style.main}>
      <PageHeader />
      <PostSubmitForm />
      <PostList />
      <Footer />
    </div>
  );
}

export default Home;
