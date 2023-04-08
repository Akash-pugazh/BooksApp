import { useState } from "react";
function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    onCreate(title);
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
