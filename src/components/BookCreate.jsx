import { useState } from "react";
import useBookContext from "../hooks/useBookContext";
function BookCreate() {
  const [title, setTitle] = useState("");
  const { createBook } = useBookContext();

  const handleSubmit = e => {
    e.preventDefault();
    createBook(title);
    setTitle("");
  };
  const handleChange = e => {
    setTitle(e.target.value);
  };
  return (
    <div className="book-create">
      <form onSubmit={handleSubmit}>
        <h3>Enter a Book : </h3>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}

export default BookCreate;
