import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Card from "./components/Card";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

const App = () => {
  let title= "App Name";

  return (
    <>
    <Router>
      <Header title={title} />
      <Routes>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/' element={<Card />}></Route>
      </Routes>
    </Router>
    </>
  );
};

export default App;
