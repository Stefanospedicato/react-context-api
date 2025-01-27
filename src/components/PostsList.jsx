import { useEffect } from "react";
import { useGlobalContext } from "../context/PostsContext";

const PostsList = () => {
  const { posts, fetchPosts } = useGlobalContext();
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container d-flex">
      {posts.map((post) => (
        <div className="card m-3" key={post.id}>
          <img src={post.image} className="card-img-top" alt={post.title} />
          <div className="card-body">
            <h5 className="card-title title">{post.title}</h5>
            <p className="card-text content">{post.content}</p>
            <p className="card-text">
              <strong>TAGS: </strong>
              {post.tags.join(", ")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
