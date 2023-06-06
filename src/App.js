import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/Main/About/About"
import Projects from "./components/Main/Projects/Projects"
import Skills from "./components/Main/Skills/Skills"
import Contact from "./components/Main/Contact/Contact"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
