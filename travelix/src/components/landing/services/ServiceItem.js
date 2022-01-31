import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ServiceItem extends Component {
  render() {
    return (
        				// {/* <!-- Offers Item --> */}
				<div className="col-lg-6 offers_col">
					<div className="offers_item">
						<div className="row">
							<div className="col-lg-6" style={{minHeight : "50px"}}>
								<div className="offers_image_container">
									<div className="offers_image_background" style={{backgroundImage:`url(servicesImages/${this.props.image})`}}></div>
									<div className="offer_name"><Link to="/">{this.props.name}</Link></div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="offers_content">
									<div className="offers_price">{this.props.price}$<span>per night</span></div>
									<div className="rating_r rating_r_4 offers_rating">
										<i></i>
										<i></i>
										<i></i>
										<i></i>
										<i></i>
									</div>
									<p className="offers_text">{this.props.description}</p>
									<div className="offers_icons">
										<ul className="offers_icons_list">
											<li className="offers_icons_item"><img src="images/post.png" alt="" /></li>
											<li className="offers_icons_item"><img src="images/compass.png" alt="" /></li>
											<li className="offers_icons_item"><img src="images/bicycle.png" alt="" /></li>
											<li className="offers_icons_item"><img src="images/sailboat.png" alt="" /></li>
										</ul>
									</div>
									<div className="offers_link"><a href="offers.html">read more</a></div>
								</div>
							</div>
						</div>
					</div>
				</div>
    );
  }
}

export default ServiceItem;
