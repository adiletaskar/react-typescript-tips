import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage";
import TodosPage from "./components/TodosPage";
import UserPage from "./components/UserPage";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <MainPage />,
    path: "/",
  },
  {
    element: <UserPage />,
    path: "/users",
  },
  { element: <TodosPage />, path: "/todos" },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
