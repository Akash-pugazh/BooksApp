import { useContext } from "react";
import BookContext from "../Context/BookContext";

export default function useBookContext() {
  return useContext(BookContext)
}