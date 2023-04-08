import { useState } from "react";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const handleChange = e => {
    setTitle(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(book.id, title);
  };
  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <input value={title} className="input" onChange={handleChange} />
      <button className="button is-primary">Change</button>
    </form>
  );
}

export default BookEdit;
