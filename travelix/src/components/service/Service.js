import React, { Component } from "react";
import "./single_listing_styles.css";
import "./single_listing_responsive.css";
import "./single_listing_custom.js";
import axios from "axios";

export class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subcategory: [],
    };
  }
  componentDidMount() {
    const url = "http://localhost/project-react1/php/service.php";
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ subcategory: data });
        console.log(this.state.subcategory);
      });
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
            src="images/single_background.jpg"
            alt="a"
          />
          <div className="home_content">
            <div className="home_title">the offers</div>
          </div>
        </div>

        {/* <!-- Offers --> */}

        <div className="listing">
          {/* <!-- Search --> */}

          {/* <!-- Single Listing --> */}

          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {this.state.subcategory
                  .filter((ele) => {
                    return ele.id === `${id}`;
                  })
                  .map((service) => {
                    return (
                      <div className="single_listing">
                        {/* <!-- Hotel Info --> */}
                        <div className="hotel_info">
                          {/* <!-- Title --> */}
                          <div className="hotel_title_container d-flex flex-lg-row flex-column">
                            <div className="hotel_title_content">
                              <h1 className="hotel_title">{service.name}</h1>
                              <div className="rating_r rating_r_4 hotel_rating">
                                <i></i>
                                <i></i>
                                <i></i>
                                <i></i>
                                <i></i>
                              </div>
                              <div className="hotel_location">Jordan</div>
                            </div>
                            <div className="hotel_title_button ml-lg-auto text-lg-right">
                              <div className="button book_button trans_200">
                                <a href="#">
                                  book<span></span>
                                  <span></span>
                                  <span></span>
                                </a>
                              </div>
                              <div className="hotel_map_link_container">
                                <div className="hotel_map_link">
                                  See Location on Map
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* <!-- Listing Image --> */}

                          <div
                            className="hotel_image"
                            style={{ width: "750px" }}
                          >
                            <img
                              src={`servicesImages/${service.image}`}
                              alt=""
                              height="600px"
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
                            <br />
                            <img
                              src={`servicesImages/${service.sub_image1}`}
                              alt="https://unsplash.com/@grovemade"
                              style={{ marginTop: "40px" }}
                            />
                            <img
                              src={`servicesImages/${service.sub_image2}`}
                              alt="https://unsplash.com/@grovemade"
                              style={{ marginTop: "40px" }}
                            />
                            <br />
                          </div>

                          {/* <!-- Hotel Gallery --> */}

                          <div className="hotel_gallery">
                            <div className="hotel_slider_container">
                              <div className="owl-carousel owl-theme hotel_slider">
                                {/* <!-- Hotel Gallery Slider Item --> */}
                                <div className="owl-item">
                                  <a
                                    href="images/listing_1.jpg"
                                    className="colorbox cboxElement"
                                  >
                                    <img
                                      src={`servicesImages/${service.sub_image1}`}
                                      alt="https://unsplash.com/@jbriscoe"
                                    />
                                  </a>
                                </div>

                                {/* <!-- Hotel Gallery Slider Item --> */}
                                <div className="owl-item">
                                  <a
                                    hrfe="images/listing_2.jpg"
                                    className="colorbox cboxElement"
                                  >
                                    <img
                                      src={`servicesImages/${service.sub_image}`}
                                      alt="https://unsplash.com/@grovemade"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* <!-- Hotel Info Text --> */}

                          <div className="hotel_info_text">
                            <p>{service.description}</p>
                          </div>

                          {/* <!-- Hotel Info Tags --> */}
                        </div>
                        {/* <!-- Reviews --> */}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Service;
