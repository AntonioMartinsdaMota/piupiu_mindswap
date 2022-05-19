import PostPage from "../../components/PostPage/Post.jsx";



function Page(props){
    const { id } = props;
    return (
        <PostPage id={id} />
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


