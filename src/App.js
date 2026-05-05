import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Footer from "./components/Navbar/Footer/Footer";
import Header from "./components/Navbar/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Places from "./components/Places/Places";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gallery/Gallery";
import FloatingSocialMedia from "./components/FloatingSocialMedia";
import Blog from "./components/Blog/Blog";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <FloatingSocialMedia/>
        <div className="pt-[110px] md:pt-[140px]">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/places-to-visit" element={<Places />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
          <Footer />
        </div>
      </Router>

    </>
  );
}

export default App;
