import { useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import useBookContext from "./hooks/useBooksContext";

function App() {
  const { getBooks } = useBookContext;

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="App">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
