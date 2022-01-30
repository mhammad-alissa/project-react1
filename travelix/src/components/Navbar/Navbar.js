import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import { HedaerIndex } from "./HedaerIndex";


class Navbar extends Component {
  state = {
    url: window.location.href,
  };

  locationHandler = (e) => {
    this.setState({
      url: e.target.href,
    });
  };
  logout = () => {
    localStorage.removeItem("users");
    window.location.href = "http://localhost:3000";
  };

  render() {
    return (
      <>
        <header className="header">
          {/* <!-- Main Navigation --> */}
          <nav className="main_nav">
            <div className="container">
              <div className="row">
                <div className="col main_nav_col landing-nav d-flex flex-row align-items-center justify-content-start">
                  <div className="logo_container">
                    <div className="logo">
                      <Link to="/">
                        <img src="images/logo.png" alt="logo" />
                        travelix
                      </Link>
                    </div>
                  </div>
                  <div className="main_nav_container ml-auto">
                    <ul className="main_nav_list">
                      <li className="main_nav_item">
                        <Link to="/" onClick={(e) => this.locationHandler(e)}>
                          Home
                        </Link>
                      </li>
                      <li className="main_nav_item">
                        <Link to="/about" onClick={(e) => this.locationHandler(e)}>about us</Link>
                      </li>
                      <li className="main_nav_item">
                        <Link to="/offers">offers</Link>
                      </li>
                      <li className="main_nav_item">
                        <Link to="/contact" onClick={(e) => this.locationHandler(e)}>contact</Link>
                      </li>
                      <li className="main_nav_item">
                        <Link to="/weather" onClick={(e) => this.locationHandler(e)}>Weather</Link>
                      </li>
                      <li
                        style={
                          localStorage.getItem("users")
                            ? { display: "none" }
                            : {}
                        }
                        className="main_nav_item"
                      >
                        <Link
                          to="/login"
                          onClick={(e) => this.locationHandler(e)}
                        >
                          Login
                        </Link>
                      </li>
                      <li
                        style={
                          localStorage.getItem("users")
                            ? { display: "none" }
                            : {}
                        }
                        className="main_nav_item"
                      >
                        <Link to="/signup">Signup</Link>
                      </li>
                      <li
                        className="main_nav_item"
                        style={
                          !localStorage.getItem("users")
                            ? { display: "none" }
                            : {}
                        }
                      >
                        <Link
                          onClick={(e) => this.locationHandler(e)}
                          to="/User"
                        >
                          <img
                            src={`userImages/${
                              localStorage.getItem("users")
                                ? JSON.parse(localStorage.getItem("users"))
                                    .image
                                : ""
                            }`}
                            alt="user"
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "50%",
                              marginRight: "10px",
                            }}
                          />
                          {localStorage.getItem("users") !== null
                            ? JSON.parse(localStorage.getItem("users")).name
                            : ""}
                        </Link>
                      </li>
                      <li
                        className="main_nav_item"
                        style={
                          !localStorage.getItem("users")
                            ? { display: "none" }
                            : {}
                        }
                        onClick={this.logout}
                      >
                        <Link to="">Logout</Link>
                      </li>
                    </ul>
                  </div>

                  <form id="search_form" className="search_form bez_1">
                    <input
                      type="search"
                      className="search_content_input bez_1"
                    />
                  </form>

                  <div className="hamburger">                    
                    <i className="fa fa-bars trans_200"></i>
					{/* <div className="home_slider_background" style={{ backgroundImage:`url(${image3})` }}></div> */}
{/* <img src="./home_slider.jpg" alt=""></img> */}
                  </div>
                  
                </div>
              </div>
            </div>
          </nav>
        </header>

        <div className="menu trans_500">
          <div className="menu_content d-flex flex-column align-items-center justify-content-center text-center">
            <div className="menu_close_container">
              <div className="menu_close"></div>
            </div>
            <div className="logo menu_logo">
              <a href="#">
                <img src="images/logo.png" alt="logo" />
              </a>
            </div>
            <ul>
              <li className="menu_item">
                <a href="#">home</a>
              </li>
              <li className="menu_item">
                <a href="about.html">about us</a>
              </li>
              <li className="menu_item">
                <a href="offers.html">offers</a>
              </li>
              <li className="menu_item">
                <a href="blog.html">news</a>
              </li>
              <li className="menu_item">
                <a href="contact.html">contact</a>
              </li>
            </ul>
          </div>
        </div> 
        {this.state.url.endsWith("/") ? <HedaerIndex display={"block"}/> : <HedaerIndex display={"none"} />  }

        <Outlet />
      </>
    );
  }
}

export default Navbar;
