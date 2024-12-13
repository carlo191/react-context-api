import { NavLink } from "react-router-dom";

export default function TableRow({
  id,
  title,
  author,
  image,
  category,
  pubblished,
  handleShow,
  setToDeleteId,
}) {
  return (
    <tr>
      <th scope="row">
        <img src={image} alt="img" width="65" />
      </th>
      <td>{title}</td>
      <td>
        <i>&#45; {author}</i>
      </td>
      <td>
        <span className="badge text-bg-primary">{category}</span>
      </td>
      <td>
        {pubblished ? (
          <i className="fa-solid fa-square-check text-success"></i>
        ) : (
          <i className="fa-solid fa-square-xmark text-danger"></i>
        )}
      </td>
      <td>
        <div className="d-flex justify-content-end">
          <NavLink to={`/posts/${id}`} className="btn btn-light ms-1">
            <i className="fa-solid fa-circle-info"></i>
          </NavLink>
          <button
            className="btn btn-danger ms-1"
            onClick={() => {
              setToDeleteId(id);
              handleShow();
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  );
}