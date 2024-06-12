import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BookShelf from "../components/BookShelf";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/mybooks", element: <BookShelf /> },
]);

export default router;
