import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import DealerNetwork from "./pages/DealerNetwork";
import AgriStories from "./pages/AgriStories"; 

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/shop", element: <Shop /> },
      { path: "/shop/:slug", element: <ProductDetail /> },
      { path: "/dealers", element: <DealerNetwork /> },
      { path: "/agri-stories", element: <AgriStories /> }, // MUST match Header
      { path: "/contact", element: <Contact /> },
    ],
  },
]);