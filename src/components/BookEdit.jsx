import { useContext, useState } from "react";
import BookContext from "../Context/BookContext";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useContext(BookContext);
  const handleChange = e => {
    setTitle(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  };
  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <input value={title} className="input" onChange={handleChange} />
      <button className="button is-primary">Change</button>
    </form>
  );
}

export default BookEdit;
