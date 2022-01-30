import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
// import subcategory from "./Subcategory";

export class CategoryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subcategory: [],
    };
  }

  componentDidMount() {
    const url = "http://localhost/project-react1/php/subcategory.php";
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ subcategory: data });
        console.log(this.state.subcategory);
      });
  }
  service = (id) => {
    console.log(id);
    localStorage.setItem("service", id);
  };
  render() {
    // console.log(this.state.subcategory);
    var id = JSON.parse(localStorage.getItem("subCategory"));
    return (
      <>
        {this.state.subcategory
          .filter((ele) => {
            return ele.category_id === `${id}`;
          })
          .map((subcategory) => {
            return (
              <div key={subcategory.id} className="col-lg-6 offers_col">
                <div className="offers_item">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="offers_image_container">
                        {/* <!-- Image by https://unsplash.com/@kensuarez --> */}
                        <Link
                          onClick={(id) => this.service(subcategory.id)}
                          to="/service"
                        >
                          <div
                            className="offers_image_background"
                            style={{
                              backgroundImage: `url(servicesImages/${subcategory.image})`,
                            }}
                          ></div>
                        </Link>
                        <div className="offer_name">
                          <Link
                            onClick={(id) => this.service(subcategory.id)}
                            to="/service"
                          >
                            {subcategory.name}
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="offers_content">
                        <div className="offers_price">
                          {subcategory.price}
                          <span>per night</span>
                        </div>
                        <div className="rating_r rating_r_4 offers_rating">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                        </div>
                        <p className="offers_text">{subcategory.description}</p>
                        <div className="offers_icons">
                          <ul className="offers_icons_list">
                            <li className="offers_icons_item">
                              <img src="images/post.png" alt="" />
                            </li>
                            <li className="offers_icons_item">
                              <img src="images/compass.png" alt="" />
                            </li>
                            <li className="offers_icons_item">
                              <img src="images/bicycle.png" alt="" />
                            </li>
                            <li className="offers_icons_item">
                              <img src="images/sailboat.png" alt="" />
                            </li>
                          </ul>
                        </div>
                        <div className="offers_link">
                          <Link to="/">read more</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        <Outlet />
      </>
    );
  }
}

export default CategoryItem;
