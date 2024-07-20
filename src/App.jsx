import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import HomePage from "./pages/HomPage/HomePage";
import About from "./pages/About/About";
import SingleProduct from "./pages/SingleProduct/SingleProduct";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/users/:id",
          element: <SingleProduct />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
