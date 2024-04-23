// SinglePost.jsx
const SinglePost = ( { post } ) => {
    return (
        <article>
            <h3>{post.title}</h3>
            <p>Author: {post.author.username}</p>
            <p>{post.body}</p>
        </article>
    )
}

export default SinglePost;