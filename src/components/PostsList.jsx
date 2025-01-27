import { useEffect } from "react"
import { useGlobalContext } from "../context/PostsContext"

const PostsList = () => {
  const {posts, fetchPosts} = useGlobalContext();
  useEffect(()=>{
    fetchPosts();
  },[])

  return (
    <div className="container">
      <ul className="list-group">
        {posts.map(post => (
          <li key={post.id} className="list-group-item">{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default PostsList