import PostPage from "../../components/PostPage/Post.jsx";
import CommentSubmitForm from "../../components/CommentSubmit/CommentSubmitForm.jsx";


function Page(props){
    const { id } = props;
    return (
      <>
       <PostPage id={id} />
        <CommentSubmitForm id={id} />
      </>
       
    )
}

const getServerSideProps = async (context) => {
    const { id } = context.query;
    return {
    props: {
      id
    }
  };
}



export default Page;
export { getServerSideProps };


