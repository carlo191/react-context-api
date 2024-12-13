import { useState, useContext } from "react";
import { Modal } from "bootstrap"; 
import { postsContext } from "../../../contexts/PostsContext";
import TableRow from "../TableRow";

export default function PostsTable() {
  // * Accesso al contesto
  const { posts, deletePost } = useContext(postsContext);

  // * Gestione del Modale
  const [show, setShow] = useState(false);
  const [toDeleteId, setToDeleteId] = useState(undefined);

  const toDeletePost = posts?.find((post) => post.id === toDeleteId);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteButton = (id) => {
    handleClose();
    deletePost(id);
  };

  return (
    <>
      <table className="table table-hover">
        {/* Table Head */}
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Titolo</th>
            <th scope="col">Autore</th>
            <th scope="col">Categoria</th>
            <th scope="col">Stato</th>
            <th scope="col"></th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {posts &&
            posts.map((post) => (
              <TableRow
                key={post.id}
                id={post.id}
                title={post.title}
                author={post.author}
                image={post.image}
                category={post.category}
                pubblished={post.pubblished}
                handleShow={handleShow}
                setToDeleteId={setToDeleteId}
              />
            ))}
        </tbody>
      </table>

      {/* Delete Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-danger fs-5">
            Stai eliminando: {toDeletePost ? toDeletePost.title : "N/A"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Quest'azione è irreversibile, procedere comunque?</p>
          <div className="text-end">
            <button className="btn btn-secondary ms-2" onClick={handleClose}>
              Annulla
            </button>
            <button
              className="btn btn-danger ms-2"
              onClick={() => handleDeleteButton(toDeletePost?.id)}
              disabled={!toDeletePost}
            >
              Elimina
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}


