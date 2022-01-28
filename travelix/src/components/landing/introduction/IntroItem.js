import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";

export class IntroItem extends Component {
  render() {
    return (
        <>
        {this.props.categories.slice(0,3).map(category=>{
            return (
                    <div key={category.id} className="col-lg-4 intro_col">
					<div className="intro_item">
						<div className="intro_item_overlay"></div>
						{/* <!-- Image by https://unsplash.com/@dnevozhai --> */}
						<div className="intro_item_background" style={{backgroundImage:`url(images/${category.image})`}}></div>
						<div className="intro_item_content d-flex flex-column align-items-center justify-content-center">
							{/* <div className="intro_date">May 25th - June 01st</div> */}
							<div className="button intro_button"><div className="button_bcg"></div><Link to="/">see more<span></span><span></span><span></span></Link></div>
							<div className="intro_center text-center">
								<h1>{category.name}</h1>
								{/* <div className="intro_price">From $1450</div> */}
								{/* <div className="rating rating_4">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
								</div> */}
							</div>
						</div>
					</div>
				</div>
            )
        })}
        <Outlet />
    		</>		
        );
  }
}

export default IntroItem;
