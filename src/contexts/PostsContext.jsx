import { useState, useEffect } from "react";
import { createContext, useContext } from "react";

const PostsContext = createContext();

export const PostsContextProvider = ({ children }) => {
  const fetchPostsData = () => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => {
        const posts = data.map((post) => ({
          id: post.id,
          title: post.title,
          author: post.author,
          content: post.content,
          image: post.image,
          category: post.category,
          pubblished: post.pubblished,
        }));

        const newPostsData = { ...postsData, posts };
        console.log(newPostsData);

        setPostsData(newPostsData);
      });
  };

  const fetchDeletePost = (id) => {
    fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res)
      .then(() => {
        fetchPostsData();
      });
  };

  const [postsData, setPostsData] = useState({
    posts: [],
    deletePost: fetchDeletePost,
  });

  useEffect(() => {
    fetchPostsData();
  }, []);

  return (
    <PostsContext.Provider value={postsData}>{children}</PostsContext.Provider>
  );
};

export const postsContext = () => {
  return useContext(PostsContext);
};