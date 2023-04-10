import { useState, useContext } from "react";
import BookContext from "../Context/BookContext";
function BookCreate() {
  const [title, setTitle] = useState("");
  const { createBook } = useContext(BookContext);

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
