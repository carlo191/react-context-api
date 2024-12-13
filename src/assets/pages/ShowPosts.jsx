import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ShowPosts() {
  const { id: postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPost(postId);
  }, [postId]);

  const fetchPost = (id) => {
    fetch(`http://localhost:3000/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  };

  return (
    <div className="container">
      <h1 className="mt-5">Dettaglio Pizza</h1>
      {post && (
        <>
          <p>Nome: {post.nome}</p>
          <p>
            Immagine: <img src={`http://localhost:3000/${post.immagine}`} alt="" width="200px" />
          </p>
        </>
      )}
    </div>
  );
}
