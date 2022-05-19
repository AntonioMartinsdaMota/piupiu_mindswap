import {useState, useEffect} from 'react';

function Post(props) {

    const {id} = props;
    

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);
  const [postLoaded , setPostLoaded] = useState(false);

  
  async function getPost(postId) {
    const response = await fetch(`/api/posts/${postId}`);
    const data = await response.json();
    console.log(data);
    setPost(data);
  }

  if (!postLoaded) {
    getPost(id);
    setPostLoaded(true);
  }

    // useEffect(() => {
    //     fetch(`api/posts/${id}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         setPost(data);
    //         setComments(data.comments);
    //     })
    // }, [id]);

    return (
        <>
        {post && (
           <div>
            <h1>{post.user.name}</h1>
            <p>{post.content}</p>
            <h2>Comments</h2>
            {comments && comments.map(comment => (
                <div key={comment.id}>
                    <h3>{comment.user.name}</h3>
                    <p>{comment.content}</p>
                </div>
            ))}

            
        </div>
        )}
        </>

    
     
    );
}


export default Post;

