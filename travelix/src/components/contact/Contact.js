import React, { Component } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./contact.css";
import "./contact_responsive.css";
import { Link } from "react-router-dom";

class Contact extends Component {
  state = {
    contact: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    errors: {
      name : "",
      email: "",
      subject: "",
      message: "",
    },
  };

    componentDidMount() {
    document.getElementById("home-landing").style.display = "none";
    this.props.ScrollUp()
  }

  ContactHandler = (event) => {
    event.preventDefault();
    let regexEmail = /^[A-ZA-z0-9._-]+@(hotmail|gmail|yahoo|outlook).com$/;
    let { name, email, subject, message } = this.state.contact;
    let error = false;
    for (let key in this.state.contact) {   
      if (this.state.contact[key].trim() === "") {
        error = true;
        this.ErrorValues(key, true);
      } else {
        this.ErrorValues(key, false);
        if (key === "email" && !regexEmail.test(this.state.contact[key])) {
          error = true;
          this.setState((preState) => ({
            ...preState,
            errors: {
              ...preState.errors,
              [key]: "Must be Email",
            },
          }));
        }
      }
    }

    if (!error) {
      let formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("subject", subject);
      formData.append("message", message);

      axios({
        method: "post",
        url: "http://localhost/project-react1/php/contact.php",
        data: formData,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      })
        .then((response) => {
          if (response.status === 200) {
            this.ClearContactValues();
            Swal.fire(
              "Sent Succesfully",
              "Thank you for contacting us",
              "success"
            );
          }
        })
        .catch((response) => {
          console.log(response);
        });
    }
  };

  ErrorValues = (key, status) => {
    this.setState((preState) => ({
      ...preState,
      errors: {
        ...preState.errors,
        [key]: status ? "* This field is required! " : "",
      },
    }));
  };

  ClearContactValues = () => {
    this.setState({
      contact: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    });
  };

  ContactValues = (event) => {
    this.setState((preState) => ({
      ...preState,
      contact : {
        ...preState.contact,
        [event.target.name]: event.target.value,
      },
    }));
  };

  render() {
    return (
      <div className="contact">
        {/* <!-- Home --> */}
        <div className="home ">
          <img
            className="contact_image parallax-window"
            data-parallax="scroll"
            src="images/contact_background.jpg"
            alt="user profile"
          />
          <div className="home_content">
            <div className="home_title">contact</div>
          </div>
        </div>

        {/* <!-- Contact --> */}
        <div className="container C-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact_form_container">
                <div className="contact_title">get in touch</div>
                <form id="contact_form" className="contact_form" noValidate>
                  <input
                    value={this.state.contact.name}
                    id="contact_form_name"
                    autoComplete="off"
                    type="text"
                    className="contact_form_name input_field"
                    placeholder="Name"
                    name="name"
                    onInput={this.ContactValues}
                  />
                  <br />
                  <span className="error" htmlFor="">
                    {this.state.errors.name}
                  </span>
                  <br />
                  <input
                    value={this.state.contact.email}
                    id="contact_form_email"
                    autoComplete="off"
                    type="email"
                    className="contact_form_email input_field"
                    placeholder="E-mail"
                    name="email"
                    onInput={this.ContactValues}
                  />
                  <br />
                  <span className="error" htmlFor="">
                    {this.state.errors.email}
                  </span>
                  <br />
                  <input
                    value={this.state.contact.subject}
                    id="contact_form_subject"
                    autoComplete="off"
                    type="text"
                    className="contact_form_subject input_field"
                    placeholder="Subject"
                    name="subject"
                    onInput={this.ContactValues}
                  />
                  <br />
                  <span className="error" htmlFor="">
                    {this.state.errors.subject}
                  </span>
                  <br />
                  <textarea
                    value={this.state.contact.message}
                    id="contact_form_message"
                    className="text_field contact_form_message"
                    name="message"
                    rows="4"
                    placeholder="Message"
                    onInput={this.ContactValues}
                  ></textarea>
                  <br />
                  <span className="error" htmlFor="">
                    {this.state.errors.message}
                  </span>
                  <br />
                  <button
                    onClick={(e) => this.ContactHandler(e)}
                    className="form_submit_button button"
                  >
                    send message<span></span>
                    <span></span>
                    <span></span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- About --> */}
        <div className="about">
          <div className="container aboutContainer">
            <div className="row">
              <div className="col-lg-5">
                {/* <!-- About - Image --> */}

                <div className="about_image">
                  <img src="images/man.png" alt="" />
                </div>
              </div>

              <div className="col-lg-4 About-text">
                {/* <!-- About - Content --> */}

                <div className="about_content">
                  <div className="logo_container about_logo">
                    <div className="logo">
                      <a href="#">
                        <img src="images/logo.png" alt="" />
                        travelix
                      </a>
                    </div>
                  </div>
                  <p className="about_text">
                    GOING BEYOND SATISFACTION To deliver the best experience
                    each day, we personalize each point of contact with great
                    care and attention to detail, whether for our clients,
                    partners or employees. We consistently strive for excellence
                    and share the desire to surpass expectations and offer the
                    best to our members.
                  </p>
                  <ul className="about_social_list">
                    <li className="about_social_item">
                      <Link to="//pinterest.com" target="_blank">
                        <i className="fab fa-pinterest"></i>
                      </Link>
                    </li>
                    <li className="about_social_item">
                      <Link to="//facebook.com" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li className="about_social_item">
                      <Link to="//twitter.com" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li className="about_social_item">
                      <Link to="//dribble.com" target="_blank">
                        <i className="fab fa-dribbble"></i>
                      </Link>
                    </li>
                    <li className="about_social_item">
                      <Link to="//behance.com" target="_blank">
                        <i className="fab fa-behance"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3">
                {/* <!-- About Info --> */}

                <div className="about_info">
                  <ul className="contact_info_list">
                    <li className="contact_info_item d-flex flex-row">
                      <div>
                        <div className="contact_info_icon">
                          <img src="images/placeholder.svg" alt="" />
                        </div>
                      </div>
                      <div className="contact_info_text">
                        4127 Raoul Wallenber 45b-c Gibraltar
                      </div>
                    </li>
                    <li className="contact_info_item d-flex flex-row">
                      <div>
                        <div className="contact_info_icon">
                          <img src="images/phone-call.svg" alt="" />
                        </div>
                      </div>
                      <div className="contact_info_text">2556-808-8613</div>
                    </li>
                    <li className="contact_info_item d-flex flex-row">
                      <div>
                        <div className="contact_info_icon">
                          <img src="images/message.svg" alt="" />
                        </div>
                      </div>
                      <div className="contact_info_text">
                        <a
                          href="mailto:contactme@gmail.com?Subject=Hello"
                          target="_top"
                        >
                          contactme@gmail.com
                        </a>
                      </div>
                    </li>
                    <li className="contact_info_item d-flex flex-row">
                      <div>
                        <div className="contact_info_icon">
                          <img src="images/planet-earth.svg" alt="" />
                        </div>
                      </div>
                      <div className="contact_info_text">
                        <a href="https://colorlib.com">www.colorlib.com</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
