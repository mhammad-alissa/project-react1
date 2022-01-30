import React, { Component } from "react";
import CategoryItem from "./CategoryItem";
import axios from "axios";

class Subcategory extends Component {
  render() {
    return (
      <>
        <div className="home">
          <img
            className="home_background parallax-window"
            data-parallax="scroll"
            src="images/Abdali-and-Boulevard1.jpg"
            alt="user profile"
          />
        </div>
        {/* // <!-- Offers --> */}

        <div className="offers">
          <div className="container">
            <div className="row">
              <div className="col text-center"></div>
            </div>
            <div className="row offers_items">
              <CategoryItem subcategory={this.props.subcategory} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Subcategory;
