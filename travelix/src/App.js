import { React, Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/landing/Landing";
import Signup from "./components/signup/signup";
import Login from "./components/login/Login";
import User from "./components/user/User";
import Navbar from "./components/Navbar/Navbar";
import Test from "./components/Navbar/Test";
import axios from "axios";
import Contact from "./components/contact/Contact";
import Footer from "./components/Navbar/Footer";
import Subcategory from "./components/offers/subcategory";

// import Subcategory from "./components/offers/Subcategory";
import About from "./components/about/About";

class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      services: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost/project-react1/services.php").then((res) => {
      this.setState({
        services: res.data,
      });
    });
    axios
      .get("http://localhost/project-react1/php/category.php")
      .then((res) => {
        this.setState({
          categories: res.data,
        });
      });
    // const url = "http://localhost/project-react1/php/category.php";
    // const res =  await fetch(url);
    // const data = await res.json();

    // const url2  = "http://localhost/project-react1/services.php";
    // const res2  = await fetch(url2);
    // const data2 = await res2.json();

    // this.setState({
    //   categories : data,
    //   services   : data2,
    //   })
  }

  render() {
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
