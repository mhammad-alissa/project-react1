import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";

export class IntroItem extends Component {
  render() {
    return (
        <>
<<<<<<< HEAD
=======
		{/* {`/Subcategory/${category.id}`} */}
>>>>>>> 31f45decce78def37944e7c91cbdb47728e0fbbb
        {this.props.categories.map(category=>{
            return (
                    <div key={category.id} className="col-lg-4 mb-3 intro_col">
					<div className="intro_item">
						<div className="intro_item_overlay"></div>
<<<<<<< HEAD
=======
						{/* <!-- Image by https://unsplash.com/@dnevozhai --> */}
>>>>>>> 31f45decce78def37944e7c91cbdb47728e0fbbb
						<div className="intro_item_background" style={{backgroundImage:`url(categoryImages/${category.image})`}}></div>
						<div className="intro_item_content d-flex flex-column align-items-center justify-content-center">
							{/* <div className="intro_date">May 25th - June 01st</div> */}
							<div className="button intro_button"><div className="button_bcg"></div><Link to='/Subcategory'>see more<span></span><span></span><span></span></Link></div>
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
