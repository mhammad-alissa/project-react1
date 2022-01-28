import { React, Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./elements_responsive.css";
import "./elements_styles.css";
import Navbar from "./components/layout/Navbar";
import Landing from './components/landing/Landing';
import Category from './components/category/Category';
import Signup from './components/signup/signup';

import Login from "./components/login/Login";
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
      <div className="App">
      <Navbar />
      <Routes>
          <Route path='/'  element={<Landing categories={this.state.categories} />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} /> 
          <Route path="/User" element={<User />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
