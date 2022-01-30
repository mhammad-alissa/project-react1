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
import Service from "./components/service/Service";
import Weather from "./components/weather/Weather";
import About from "./components/about/About";
import "./main_styles.css"
import "./responsive.css"
import Category from "./components/category/Category";

class App extends Component {

  
  constructor() {
    super();
    this.state = {
      categories: [],
      services: [],
      location: '', 
      degree: '',
      forecast: [],
      main: ''
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
   
  }

  render() {
   
    return (
      <BrowserRouter>
        <div className="super_container">
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route
                index
                element={
                  <Landing
                    categories={this.state.categories}
                    services={this.state.services}
                  />
                }
              />
              <Route path="/login" element={<Login path={"/login"} />} />
              <Route path="/category" element={<Category categories={this.state.categories} />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/user" element={<User />} />
              <Route path="/test" element={<Test />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/weather" element={<Weather />} />
              <Route path="/Subcategory" element={<Subcategory />} />
              <Route path="/service" element={<Service />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
