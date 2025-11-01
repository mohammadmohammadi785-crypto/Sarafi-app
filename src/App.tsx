import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Exchange from "./Pages/Exchange";
import Market from "./Pages/Market";
import Blogs from "./Pages/Blogs";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="bg-stone-50  ">
      <BrowserRouter>
        <Navbar />
        <div className="max-w-8xl mx-auto w-full pt-1 ">
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<About />} path="/about" />
            <Route element={<Contact />} path="/contact" />
            <Route element={<Exchange />} path="/exchange" />
            <Route element={<Market />} path="/market" />
            <Route element={<Blogs />} path="/blogs" />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
