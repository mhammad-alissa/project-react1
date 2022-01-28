import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";

export class subcategory extends Component {
  render() {
    return (
        <>
        {/* // <!-- Offers --> */}

        <div className="offers">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h2 className="section_title">the best offers with rooms</h2>
                    </div>
                </div>
                <div className="row offers_items">
    
                    {/* <!-- Offers Item --> */}
                    <div className="col-lg-6 offers_col">
                        <div className="offers_item">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="offers_image_container">
                                        {/* <!-- Image by https://unsplash.com/@kensuarez --> */}
                                        <div className="offers_image_background" style={{backgroundImage:'url(images/offer_1.jpg)'}}></div>
                                        <div className="offer_name"><Link to="/">grand castle</Link></div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="offers_content">
                                        <div className="offers_price">$70<span>per night</span></div>
                                        <div className="rating_r rating_r_4 offers_rating">
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                        </div>
                                        <p className="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
                                        <div className="offers_icons">
                                            <ul className="offers_icons_list">
                                                <li className="offers_icons_item"><img src="images/post.png" alt=""/></li>
                                                <li className="offers_icons_item"><img src="images/compass.png" alt=""/></li>
                                                <li className="offers_icons_item"><img src="images/bicycle.png" alt=""/></li>
                                                <li className="offers_icons_item"><img src="images/sailboat.png" alt=""/></li>
                                            </ul>
                                        </div>
                                        <div className="offers_link"><Link to="/">read more</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Offers Item --> */}
                    <div className="col-lg-6 offers_col">
                        <div className="offers_item">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="offers_image_container">
                                        {/* <!-- Image by Egzon Bytyqi --> */}
                                        <div className="offers_image_background" style={{ backgroundImage:'url(images/offer_2.jpg)' }}></div>
                                        <div className="offer_name"><Link to="/">turkey hills</Link></div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="offers_content">
                                        <div className="offers_price">$50<span>per night</span></div>
                                        <div className="rating_r rating_r_4 offers_rating">
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                        </div>
                                        <p className="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
                                        <div className="offers_icons">
                                            <ul className="offers_icons_list">
                                                <li className="offers_icons_item"><img src="images/post.png" alt=""/></li>
                                                <li className="offers_icons_item"><img src="images/compass.png" alt=""/></li>
                                                <li className="offers_icons_item"><img src="images/bicycle.png" alt=""/></li>
                                                <li className="offers_icons_item"><img src="images/sailboat.png" alt=""/></li>
                                            </ul>
                                        </div>
                                        <div className="offers_link"><Link to="/">read more</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    {/* <!-- Offers Item --> */}
                    <div className="col-lg-6 offers_col">
                        <div className="offers_item">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="offers_image_container">
                                        {/* <!-- Image by https://unsplash.com/@nevenkrcmarek --> */}
                                        <div className="offers_image_background" style={{backgroundImage:'url(images/offer_3.jpg)'}}></div>
                                        <div className="offer_name"><Link to="/">island dream</Link></div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="offers_content">
                                        <div className="offers_price">$90<span>per night</span></div>
                                        <div className="rating_r rating_r_4 offers_rating">
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                        </div>
                                        <p className="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
                                        <div className="offers_icons">
                                            <ul className="offers_icons_list">
                                                <li className="offers_icons_item"><img src="images/post.png" alt=""/></li>
                                                <li className="offers_icons_item"><img src="images/compass.png" alt=""/></li>
                                                <li className="offers_icons_item"><img src="images/bicycle.png" alt=""/></li>
                                                <li className="offers_icons_item"><img src="images/sailboat.png" alt=""/></li>
                                            </ul>
                                        </div>
                                        <div className="offers_link"><Link to="/">read more</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    {/* <!-- Offers Item --> */}
                    <div className="col-lg-6 offers_col">
                        <div className="offers_item">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="offers_image_container">
                                        {/* <!-- Image by https://unsplash.com/@mantashesthaven --> */}
                                        <div className="offers_image_background" style={{backgroundImage:'url(images/offer_4.jpg)'}}></div>
                                        <div className="offer_name"><Link to="/">travel light</Link></div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="offers_content">
                                        <div className="offers_price">$30<span>per night</span></div>
                                        <div className="rating_r rating_r_4 offers_rating">
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                        </div>
                                        <p className="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
                                        <div className="offers_icons">
                                            <ul className="offers_icons_list">
                                                <li className="offers_icons_item"><img src="images/post.png" alt=""/></li>
                                                <li className="offers_icons_item"><img src="images/compass.png" alt=""/></li>
                                                <li className="offers_icons_item"><img src="images/bicycle.png" alt=""/></li>
                                                <li className="offers_icons_item"><img src="images/sailboat.png" alt=""/></li>
                                            </ul>
                                        </div>
                                        <div className="offers_link"><Link to="/subcategory">read more</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
        <Outlet />
            </>
            );
  }
}

export default subcategory;
