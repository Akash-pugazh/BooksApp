import { createContext, useState } from "react";
import axios from "axios";

const BookContext = createContext();
function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const res = await axios.get("http://localhost:5055/books");
    setBooks(res.data);
  };

  const createBook = async title => {
    const response = await axios.post("http://localhost:5055/books", {
      title,
    });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const deleteBookById = async id => {
    await axios.delete(`http://localhost:5055/books/${id}`);
    const updatedBooks = books.filter(book => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:5055/books/${id}`, {
      title: newTitle,
    });
    const updatedBooks = books.map(book => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    getBooks,
  };

  return (
    <BookContext.Provider value={valueToShare}>{children}</BookContext.Provider>
  );
}

export { Provider };
export default BookContext;
