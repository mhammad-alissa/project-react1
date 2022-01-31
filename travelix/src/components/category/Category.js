import React, { Component } from "react";
import IntroItem from "../landing/introduction/IntroItem";


export class Category extends Component {

  componentDidMount() {
    document.getElementById("home-landing").style.display = "none";
  }

  render() {
    return (
      <>
        <div class="home">
          <div
            class="home_background parallax-window"
            data-parallax="scroll"
            style={{ backgroundImage: `url(images/elements_background.jpg)` }}
          ></div>
          <div class="home_content">
            <div class="home_title">Categories</div>
          </div>
        </div>
        <div className="offers">
          <div className="container">
            <div className="row offers_items">
              <IntroItem categories={this.props.categories} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Category;
