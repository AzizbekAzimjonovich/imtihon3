// src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux"; // Import the Provider component
import store from "./store"; // Import your Redux store

import Home from "./pages/Home";
import Earphones from "./pages/Earphones";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Main from "./pages/Main";
import SingleProduct from "./pages/SingleProduct";

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
          path: "/earphones",
          element: <Earphones />,
        },
        {
          path: "/headphones",
          element: <Headphones />,
        },
        {
          path: "/speakers",
          element: <Speakers />,
        },
        {
          path: "/product/:id",
          element: <SingleProduct />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      {" "}
      {/* Wrap the App component with Provider and pass the store */}
      <RouterProvider router={routers} />
    </Provider>
  );
}

export default App;
