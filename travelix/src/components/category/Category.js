import React, { Component } from 'react';
import IntroItem from '../landing/introduction/IntroItem';
// import './contact_responsive.css'
// import './contact_styles.css'

export class Category extends Component {
  render() {
    return (
		<>
<div className="home">
    <div className="home_background parallax-window" data-parallax="scroll" style={{ backgroundImage:`url(images/category.jpg)` }}></div>
    <div className="home_content">
        <div className="home_title">categories</div>
    </div>
</div>
        <div className="offers">
          <div className="container">
            <div className="row">
              <h1 style={{fontSize:"50px", color:"black", fontWeight:"bold"}} className="col text-center">Categories</h1>
            </div>
            <div className="row offers_items">
              <IntroItem  categories={this.props.categories} />
            </div>
          </div>
        </div>
</>
        );
  }
}

export default Category;
