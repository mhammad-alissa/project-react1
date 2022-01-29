import { React, Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from './components/landing/Landing';
import Signup from './components/signup/signup';
import Login from "./components/login/Login";
import User from "./components/user/User";
import Navbar from "./components/Navbar/Navbar";
import Test from "./components/Navbar/Test";
import axios from "axios";
import Footer from "./components/layout/Footer";
import Contact from "./components/contact/Contact";
// import Subcategory from "./components/offers/Subcategory";

class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      services  : [],
    };
  }

   componentDidMount() {
     axios.get("http://localhost/project-react1/services.php").then(res=>{
       this.setState({
         services : res.data
       })
     })
     axios.get("http://localhost/project-react1/php/category.php").then(res=>{
       this.setState({
         categories : res.data
       })
     })
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
        <div className="super_container">
        <Routes>
            <Route path="/" element={<Navbar />} >
            <Route index element={<Landing categories={this.state.categories} services={this.state.services} />}  />
            <Route path='/login' element={<Login path={'/login'} />} />
            <Route path='/signup' element={<Signup />} /> 
            <Route path="/user" element={<User />} />
            <Route path="/test" element={<Test />} />
            <Route path="/contact" element={<Contact />} />
          </Route>                
        </Routes>
        <Footer />
            {/* <Route
              path="/Subcategory"
              element={<Subcategory subcategory={this.state.subcategory} />}
            /> */}
        </div>
      </BrowserRouter>
    );
}}
export default App;
