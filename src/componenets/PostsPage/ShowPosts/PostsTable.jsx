import { useState } from "react";

import { postsContext } from "../../../contexts/postsContext";

import { Modal } from "bootstrap";
import TableRow from "../TableRow";

export default function PostsTable() {
  // * Posts Data
  const { posts, deletePost } = postsContext();

  // * Delete Modal Handler
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [toDeleteId, setToDeleteId] = useState(undefined);
  const toDeletePost = posts.find((post) => post.id === toDeleteId);

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
            posts.map((post) => {
              return (
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
              );
            })}
        </tbody>
      </table>

      {/* Delete Modal */}
      <Modal
        key={toDeletePost && toDeletePost.id}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-danger fs-5">
            Stai eliminando: {toDeletePost && toDeletePost.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column">
          <div className="p-2">
            Quest'azione è irreversibile, procedere comunque?
          </div>
          <div className="align-self-end mt-3">
            <button className="btn btn-secondary ms-2" onClick={handleClose}>
              Annulla
            </button>
            <button
              className="btn btn-danger ms-2"
              onClick={() => handleDeleteButton(toDeletePost.id)}
            >
              Elimina
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
