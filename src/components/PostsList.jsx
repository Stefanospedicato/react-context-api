import { useEffect } from "react";
import { useGlobalContext } from "../context/PostsContext";

const PostsList = () => {
  const { posts, fetchPosts } = useGlobalContext();
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container">
      {posts.map((post) => (
        <div className="card" key={post.id}>
          <img src={post.image} className="card-img-top" alt={post.title} />
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
