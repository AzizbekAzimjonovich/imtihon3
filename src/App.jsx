// src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Earphones from "./pages/Earphones";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Main from "./pages/Main";

function App() {
  const routers = createBrowserRouter([
    {
      element: <Home />,
      children: [
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "earphones",
          element: <Earphones />,
        },
        {
          path: "headphones",
          element: <Headphones />,
        },
        {
          path: "speakers",
          element: <Speakers />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
}

export default App;