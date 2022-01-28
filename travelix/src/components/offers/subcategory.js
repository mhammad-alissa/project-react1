import React, { Component } from 'react';
import { Outlet } from "react-router-dom";
import CategoryItem from './CategoryItem';

export class subcategory extends Component {
    
  render() {
    return (
        <>
        <div class="home">
        <img className="home_background parallax-window" data-parallax="scroll" src="images/Abdali-and-Boulevard1.jpg" alt="user profile" />
	</div>
        {/* // <!-- Offers --> */}

        <div className="offers">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                    </div>
                </div>
                <div className="row offers_items">
    
				<CategoryItem subcategory={this.props.subcategory} />
    
                </div>
            </div>
        </div>
        <Outlet />
            </>
            );
  }
}

export default subcategory;
