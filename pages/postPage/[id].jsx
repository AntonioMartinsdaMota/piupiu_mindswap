import PostPage from "../../components/PostPage/Post.jsx";
import CommentSubmitForm from "../../components/CommentSubmit/CommentSubmitForm.jsx";
import styles from "./postPage.module.css";

function Page(props) {
  const { id } = props;
  return (
    <div className={styles.cardBox}>
      <PostPage className={styles.postpagecss} id={id} />
      <CommentSubmitForm id={id} />
    </div>
  );
}

const getServerSideProps = async (context) => {
  const { id } = context.query;
  return {
    props: {
      id,
    },
  };
};

export default Page;
export { getServerSideProps };
