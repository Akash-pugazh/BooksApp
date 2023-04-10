import { useState } from "react";
import useBookContext from "../hooks/useBooksContext";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBookContext;
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
