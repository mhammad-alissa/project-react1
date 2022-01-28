import { React, Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./elements_responsive.css";
import "./elements_styles.css";
import Home from "./components/Home";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/landing/Landing";
import Category from "./components/category/Category";
import User from "./components/user/User";
import Footer from "./components/layout/Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  async componentDidMount() {
    const url = "http://localhost/project-react1/travelix/category.php";
    const res = await fetch(url);
    const data = await res.json();

    this.setState({
      categories: data,
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="super_container">
          <Navbar />
          <Routes>
            <Route path="/Home" element={<Home />} />
            {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
          </Routes>
          <Landing categories={this.state.categories} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
