import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function IndexPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => {
        const postsData = data.map((post) => ({
          id: post.id,
          nome: post.titolo,
          immagine: post.immagine,
        }));

        setPosts(postsData);
      });
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">Immagine</th>
          <th scope="col">Mostra dettagli</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td>{post.nome}</td>
            <td>
              <img
                src={`http://localhost:3000/${post.immagine}`}
                alt={post.nome}
                width="50px"
              />
            </td>
            <td>
              <a href={`#post-${post.id}`}>
                <Link
                  to={`/posts/${post.id}`}
                  type="button"
                  className="btn btn-primary "
                >
                  <i className="fa-solid fa-eye "></i>
                </Link>
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
