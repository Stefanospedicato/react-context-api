import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const PostContext = createContext();

const PostsProvider = ({children}) =>{

  const baseApiUrl = 'http://localhost:3000/posts'
  const [posts, setPosts] = useState([])

  const fetchPosts = () =>{
    axios.get(baseApiUrl)
      .then(res => {
        setPosts(res.data)
      })
  }

  useEffect(()=>{
    fetchPosts()
  },[])

  return (
    <PostContext.Provider value={{posts, fetchPosts}}>
      {children}
    </PostContext.Provider>
  )
}

const useGlobalContext = () =>{
  return useContext(PostContext)
}

export {useGlobalContext, PostsProvider}