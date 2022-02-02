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

  ScrollUp = (e) => {
        window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
      });
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
                    ScrollUp={this.ScrollUp}
                    categories={this.state.categories}
                    services={this.state.services}
                  />
                }
              />
              <Route path="/login" element={<Login path={"/login"} ScrollUp={this.ScrollUp} />} />
              <Route path="/category" element={<Category categories={this.state.categories} ScrollUp={this.ScrollUp}  />} />
              <Route path="/signup" element={<Signup ScrollUp={this.ScrollUp}  /> } />
              <Route path="/user" element={<User ScrollUp={this.ScrollUp} />}  />
              <Route path="/contact" element={<Contact ScrollUp={this.ScrollUp}/>}   />
              <Route path="/about" element={<About ScrollUp={this.ScrollUp} />} />
              <Route path="/weather" element={<Weather ScrollUp={this.ScrollUp} />} />
              <Route path="/Subcategory" element={<Subcategory ScrollUp={this.ScrollUp} />} />
              <Route path="/service" element={<Service ScrollUp={this.ScrollUp} />}/>
            </Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
