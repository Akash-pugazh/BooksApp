import { useContext, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BookContext from "./Context/BookContext";

function App() {
  const { getBooks } = useContext(BookContext);

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  return (
    <div className="App">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App