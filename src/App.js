import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Footer from "./components/Navbar/Footer/Footer";
import Header from "./components/Navbar/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Places from "./components/Places/Places";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gallery/Gallery";
import WhatsupButton from "./components/WhatsupButton/WhatsupButton";
import FloatingSocialMedia from "./components/FloatingSocialMedia";

function App() {
  return (
    <>
      <Router>
        <FloatingSocialMedia/>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/place-to-visit" element={<Places />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
          <Footer />
        </div>
      </Router>
      {/* <WhatsupButton /> */}
    </>
  );
}

export default App;
