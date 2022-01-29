import { React, Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./elements_responsive.css";
import "./elements_styles.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/landing/Landing";
// import Category from './components/category/Category';
import Signup from "./components/signup/signup";

import Login from "./components/login/Login";
import User from "./components/user/User";
import Footer from "./components/layout/Footer";
// import axios from "axios";
import History from "./History";
// import axios from "axios";
import Contact from "./components/contact/Contact";
// import Subcategory from "./components/offers/Subcategory";
import About from "./components/about/About";

class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  async componentDidMount() {
    const url = "http://localhost/project-react1/php/category.php";
    const res = await fetch(url);
    console.log(res);
    const data = await res.json();
    this.setState({
      categories: data,
    });
  }

  // axios.get('http://localhost/project-react1/php/category.php')
  // .then(res=> { this.setState({
  //   categories: res.data,
  // })})
  // .catch(error => {
  //   console.log(error.response)

  render() {
    console.log(this.state.categories);
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes History={History}>
            <Route
              path="/"
              element={<Landing categories={this.state.categories} />}
            />
            <Route path="/login" element={<Login />} />
            {/* <Route
              path="/Subcategory"
              element={<Subcategory subcategory={this.state.subcategory} />}
            /> */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/User" element={<User />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
