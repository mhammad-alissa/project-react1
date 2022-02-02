import React, { Component } from "react";
import "./single_listing_styles.css";
import "./single_listing_responsive.css";
import "./single_listing_custom.js";
import axios from "axios";
import Swal from "sweetalert2";
import $ from "jquery";
import { Link } from "react-router-dom";
export class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subcategory: [],
      booking: {
        service: `${JSON.parse(localStorage.getItem("service"))}`,
        date: "",
        time: "",
        notes: "",
        adults: "0",
        children: "0",
      },
      bookingErrors: {
        service: "",
        date: "",
        time: "",
        adults: true,
        children: true,
        notes: true,
      },
    };
  }

  componentDidMount() {
    this.props.ScrollUp();
    document.getElementById("home-landing").style.display = "none";
    const url = "http://localhost/project-react1/php/service.php";
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ subcategory: data });
      });

    $(function () {
      var dtToday = new Date();
      var month = dtToday.getMonth() + 1;
      var day = dtToday.getDate();
      var year = dtToday.getFullYear();
      if (month < 10) month = "0" + month.toString();
      if (day < 10) day = "0" + day.toString();
      var maxDate = year + "-" + month + "-" + day;
      $("#txtDate").attr("min", maxDate);
    });
  }
  BookingValues = (e) => {
    this.setState((preState) => ({
      ...preState,
      booking: {
        ...preState.booking,
        [e.target.name]: e.target.value,
      },
    }));
  };
  BookClickHandler = (e) => {
    e.preventDefault();
    if (JSON.parse(localStorage.getItem("users"))) {
      let { service, date, time, adults, children, notes } = this.state.booking;
      let error = false;
      for (let key in this.state.booking) {
        if (this.state.booking[key].trim() === "") {
          this.BookingErrors(key, true);
          error = true;
        } else {
          this.BookingErrors(key, false);
        }
      }
      if (!error) {
        let formData = new FormData();
        formData.append(
          "user_id",
          +JSON.parse(localStorage.getItem("users")).id
        );
        formData.append("service_id", service);
        formData.append("delivery", 0);
        formData.append("time_of_day", time);
        formData.append("date_chosen", date);
        formData.append("adults", adults);
        formData.append("children", children);
        formData.append("status", "pending");
        formData.append("notes", notes);

        axios({
          method: "POST",
          url: "http://localhost/project-react1/booking.php",
          data: formData,
          config: { headers: { "Content-Type": "multipart/form-data" } },
        })
          .then((response) => {
            if (response.status === 200) {
              this.BookingClearValues()
              Swal.fire(
                "Booking Succesfull",
                `Booking ID is: ${response.data[1]} `,
                "success"
              );
              this.setState({

              })
            }
          })
          .catch(function (response) {});
      }
    } else {
      localStorage.setItem("url","yes");
      window.location.assign("/login");
    }
  };
  BookingErrors = (key, status) => {
    this.setState((preState) => ({
      ...preState,
      bookingErrors: {
        ...preState.bookingErrors,
        [key]: status ? "This field is required" : "",
      },
    }));
  };

  BookingClearValues = () => {
		this.setState(preState => ({
			...preState , booking : {
				  service  : "",
					date     : "",
					time     : "",
					adults   : "0",
					children : "0",
          notes    : ""
			}
			}
	))
	}

  render() {
    var id = JSON.parse(localStorage.getItem("service"));
    return (
      <section>
        {/* <!-- Home --> */}

        <div className="home">
          <img
            className="home_background parallax-window"
            data-parallax="scroll"
            src="images/blog_background.jpg"
            alt="a"
            style={{ width: "auto" }}
          />
          <div className="home_content">
            <div className="home_title"></div>
          </div>
        </div>

        {/* <!-- Offers --> */}

        <div className="listing">
          {/* <!-- Search --> */}

          {/* <!-- Single Listing --> */}

          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                {this.state.subcategory
                  .filter((ele) => {
                    return ele.id === `${id}`;
                  })
                  .map((service) => {
                    return (
                      <div key={service.id} className="single_listing">
                        {/* <!-- Hotel Info --> */}
                        <div className="hotel_info">
                          {/* <!-- Title --> */}
                          <div className="hotel_title_container d-flex flex-lg-row flex-column">
                            <div className="hotel_title_content">
                              <h1 className="hotel_title">{service.name}</h1>
                              <div className="hotel_location">Jordan</div>
                            </div>
                            <div className="hotel_title_button ml-lg-auto text-lg-right">
                              {/* Booking Form */}

                              {/* <div className="contact_form_section"> */}
                              {/* <div className="container"> */}
                              {/* <div className="row"> */}

                              {/* </div> */}
                              {/* </div> */}
                              {/* </div> */}

                              {/* <div className="button book_button trans_200">
                                <a href="#">
                                  book<span></span>
                                  <span></span>
                                  <span></span>
                                </a>
                              </div> */}

                              {/* <div className="hotel_map_link_container">
                                <div className="hotel_map_link">
                                  See Location on Map
                                </div>
                              </div> */}
                            </div>
                          </div>

                          {/* <!-- Listing Image --> */}

                          <div className="hotel_image">
                            <img
                              src={`servicesImages/${service.image}`}
                              alt=""
                            />

                            <div className="hotel_review_container d-flex flex-column align-items-center justify-content-center">
                              <div className="hotel_review">
                                <div className="hotel_review_content">
                                  <div className="hotel_review_title">
                                    very good
                                  </div>
                                  <div className="hotel_review_subtitle">
                                    100 reviews
                                  </div>
                                </div>
                                <div className="hotel_review_rating text-center">
                                  8.1
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <img
                              onClick={() =>
                                window.open(
                                  `http://localhost:3000/servicesImages/${service.sub_image1}`,
                                  "_blank"
                                )
                              }
                              src={`servicesImages/${service.sub_image1}`}
                              alt="https://unsplash.com/@grovemade"
                              style={{
                                marginTop: "40px",
                                cursor: "pointer",
                                width: "120px",
                                height: "70px",
                                marginRight: "20px",
                              }}
                            />
                            <img
                              onClick={() =>
                                window.open(
                                  `http://localhost:3000/servicesImages/${service.sub_image2}`,
                                  "_blank"
                                )
                              }
                              src={`servicesImages/${service.sub_image2}`}
                              alt="https://unsplash.com/@grovemade"
                              style={{
                                marginTop: "40px",
                                cursor: "pointer",
                                width: "120px",
                                height: "70px",
                              }}
                            />
                          </div>
                          {/* <!-- Hotel Gallery --> */}

                          {/* <!-- Hotel Info Tags --> */}
                          <div className="hotel_info_text">
                            <p>{service.description}</p>
                          </div>
                        </div>
                        {/* <!-- Reviews --> */}
                      </div>
                    );
                  })}
              </div>

              <div
                className="bookingForm col-lg-4 col-md-12 col-sm-12"
                style={{ marginTop: "138px", marginBottom: "90px" }}
              >
                {/* <!-- Contact Form --> */}
                <div className="contact_form_container">
                  <img
                    src={
                      localStorage.getItem("users")
                        ? `userImages/${
                            JSON.parse(localStorage.getItem("users")).image
                          }`
                        : ""
                    }
                    alt="user"
                    width={"90px"}
                    height={"90px"}
                    style={
                      localStorage.getItem("users")
                        ? { borderRadius: "50%", marginLeft: "31%" }
                        : { display: "none" }
                    }
                  />
                  <div className="contact_title text-center">
                    {localStorage.getItem("users")
                      ? JSON.parse(localStorage.getItem("users")).name
                      : ""}
                  </div>
                  <form id="contact_form" className="contact_form text-center">
                    <div style={{ color: "white", fontSize: "14px" }}>Date</div>
                    <input
                      id="txtDate"
                      onChange={(e) => this.BookingValues(e)}
                      type="date"
                      name="date"
                      className="check_in search_input"
                      style={{ marginBottom: "15px" }}
                      value={this.state.booking.date}
                    />
                    <label className="search-booking">
                      {this.state.bookingErrors.date}
                    </label>
                    <div style={{ color: "white", fontSize: "14px" }}>Time</div>
                    <input
                      onChange={(e) => this.BookingValues(e)}
                      type="Time"
                      name="time"
                      className="check_out search_input"
                      style={{ marginBottom: "15px" }}
                      value={this.state.booking.time}
                    />
                    <label className="search-booking">
                      {this.state.bookingErrors.time}
                    </label>
                    <div style={{ color: "white", fontSize: "14px" }}>
                      adults
                    </div>
                    <input
                      onChange={(e) => this.BookingValues(e)}
                      type="number"
                      name="adults"
                      placeholder="0"
                      className="check_out search_input"
                      style={{ marginBottom: "15px" }}
                      value={this.state.booking.adults}
                    />
                    <div style={{ color: "white", fontSize: "14px" }}>
                      children
                    </div>
                    <input
                      onChange={(e) => this.BookingValues(e)}
                      type="number"
                      name="children"
                      placeholder="0"
                      className="check_out search_input"
                      style={{ marginBottom: "15px" }}
                      value={this.state.booking.children}
                    />
                    <div style={{ color: "white", fontSize: "14px" }}>
                      notes
                    </div>
                    <textarea
                      onChange={(e) => this.BookingValues(e)}
                      name="notes"
                      className="check_out search_input"
                      style={{ marginBottom: "15px", height: "120px" }}
                    >
                      {this.state.booking.notes}
                    </textarea>
                    <button
                      className="button search_button"
                      onClick={(e) => {
                        this.BookClickHandler(e);
                      }}
                    >
                      Book Now<span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Service;
