<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
// import Blogs from "../components/Home";
// import Contact from "./components/Home";
// import NoPage from "./components/Home";
import Navbar from "./components/layout/Navbar";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        
          <Route path='/Home' element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
=======
import "./App.css";

function App() {
  return <div className="App"></div>;
>>>>>>> 82d34edddef05bc62de4039c821ec770551dbf0f
}

export default App;
