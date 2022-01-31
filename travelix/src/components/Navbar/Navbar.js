import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import { HedaerIndex } from "./HedaerIndex";
import Miniweather from "../weather/Miniweather";

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
    window.location.href = "/";
  };

  render() {
    return (
      <>
        <header className="header">
          {/* <!-- Main Navigation --> */}
          <nav className="main_nav">
            <div className="container">
              <div className="row">
                <div className="col main_nav_col landing-nav d-flex flex-row align-items-center justify-content-lg-start justify-content-between  ">
                  <div className="logo_container">
                    <div className="logo">
                      <Link onClick={(e) => this.locationHandler(e)} to="/">
                        <img src="images/logo.png" alt="logo" />
                        travelix
                      </Link>
                    </div>
                  </div>
                  <div className="main_nav_container ml-auto mr-0">
                    <ul className="main_nav_list">
                      <li className="main_nav_item">
                        <Link to="/" onClick={(e) => this.locationHandler(e)}>
                          Home
                        </Link>
                      </li>
                      <li className="main_nav_item">
                        <Link
                          to="/category"
                          onClick={(e) => this.locationHandler(e)}
                        >
                          Services
                        </Link>
                      </li>
                      <li className="main_nav_item">
                        <Link
                          to="/about"
                          onClick={(e) => this.locationHandler(e)}
                        >
                          about us
                        </Link>
                      </li>
                      <li className="main_nav_item">
                        <Link
                          to="/contact"
                          onClick={(e) => this.locationHandler(e)}
                        >
                          contact
                        </Link>
                      </li>
                      <li className="main_nav_item">
                        <Link
                          to="/weather"
                          onClick={(e) => this.locationHandler(e)}
                        >
                          Weather
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
                        <Link
                          to="/signup"
                          onClick={(e) => this.locationHandler(e)}
                        >
                          Signup
                        </Link>
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
                            ? JSON.parse(
                                localStorage.getItem("users")
                              ).name.split(" ")[0]
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
                        <Link to="/">Logout</Link>
                      </li>
                      {!window.location.href.endsWith("/weather") ? (
                        <li
                          className="main_nav_item"
                          style={{ transform: "scale(0.5)" }}
                        >
                          <Miniweather />
                        </li>
                      ) : (
                        ""
                      )}
                    </ul>
                  </div>

                  <div className="hamburger" style={{ marginRight: "30px" }}>
                    <i className="fa fa-bars trans_200"></i>
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
              <Link onClick={(e) => this.locationHandler(e)} to="/">
                <img src="images/logo.png" alt="logo" />
              </Link>
            </div>
            <ul>
              <li
                className="menu_item"
                style={
                  !localStorage.getItem("users") ? { display: "none" } : {}
                }
              >
                <Link onClick={(e) => this.locationHandler(e)} to="/User">
                  <img
                    src={`userImages/${
                      localStorage.getItem("users")
                        ? JSON.parse(localStorage.getItem("users")).image
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
                    ? JSON.parse(localStorage.getItem("users")).name.split(
                        " "
                      )[0]
                    : ""}
                </Link>
              </li>
              <li className="menu_item">
                <Link to="/" onClick={(e) => this.locationHandler(e)}>
                  Home
                </Link>
              </li>
              <li className="menu_item">
                <Link to="/category" onClick={(e) => this.locationHandler(e)}>
                  Services
                </Link>
              </li>
              <li className="menu_item">
                <Link to="/about" onClick={(e) => this.locationHandler(e)}>
                  about us
                </Link>
              </li>
              <li className="menu_item">
                <Link to="/contact" onClick={(e) => this.locationHandler(e)}>
                  contact
                </Link>
              </li>
              <li className="menu_item">
                <Link to="/weather" onClick={(e) => this.locationHandler(e)}>
                  Weather
                </Link>
              </li>
              <li
                className="menu_item"
                style={localStorage.getItem("users") ? { display: "none" } : {}}
              >
                <Link to="/login" onClick={(e) => this.locationHandler(e)}>
                  Login
                </Link>
              </li>
              <li
                className="menu_item"
                style={localStorage.getItem("users") ? { display: "none" } : {}}
              >
                <Link onClick={(e) => this.locationHandler(e)} to="/signup">
                  Signup
                </Link>
              </li>

              <li
                className="menu_item"
                style={
                  !localStorage.getItem("users") ? { display: "none" } : {}
                }
                onClick={this.logout}
              >
                <Link to="/">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
        {<HedaerIndex />}
        {/* {this.state.url.endsWith("/") ? <HedaerIndex display={"block"}/> : <HedaerIndex display={"none"} />  } */}

        <Outlet />
      </>
    );
  }
}

export default Navbar;
