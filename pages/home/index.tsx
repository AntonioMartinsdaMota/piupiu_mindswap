import PostList from "../../components/PostList/Postlist";
import PostSubmitForm from "../../components/PostSubmit/PostSubmitForm";
import PageHeader from "../../components/Header/FeedHeader";
import Footer from "../../components/Footer";
import style from "./home.module.css";

function Home() {
  return (
    <div className={style.main}>
      <PageHeader />
      <PostList />
      <div className={style.fixed}>
        <PostSubmitForm />
      </div>
    </div>
  );
}

export default Home;
