import Layout from "./components/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import About from "./pages/about";
import Cart from "./pages/cart";
import Login from "./pages/login";
import Wishlist from "./pages/wishlist";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="blog" element={<Blog />} />
            <Route path="about" element={<About />}></Route>
            <Route Path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
            <Route path="wishlist" element={<Wishlist />} />
          
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
