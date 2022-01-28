import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
        <>
            <div className="super_container">

        <div className="home">
		
		{/* <!-- Home Slider --> */}

		<div className="home_slider_container">
			
			<div className="owl-carousel owl-theme home_slider">

				{/* <!-- Slider Item --> */}
				<div className="owl-item home_slider_item">
					{/* <!-- Image by https://unsplash.com/@anikindimitry --> */}
					<div className="home_slider_background" style={{backgroundImage:'url(images/home_slider.jpg)'}}></div>

					<div className="home_slider_content text-center">
						<div className="home_slider_content_inner" data-animation-in="flipInX" data-animation-out="animate-out fadeOut">
							<h1>discover</h1>
							<h1>the world</h1>
							<div className="button home_slider_button"><div className="button_bcg"></div><Link to="/">explore now<span></span><span></span><span></span></Link></div>
						</div>
					</div>
				</div>

				{/* <!-- Slider Item --> */}
				<div className="owl-item home_slider_item">
					<div className="home_slider_background" style={{backgroundImage:'url(images/home_slider.jpg)'}}></div>

					<div className="home_slider_content text-center">
						<div className="home_slider_content_inner" data-animation-in="flipInX" data-animation-out="animate-out fadeOut">
							<h1>discover</h1>
							<h1>the world</h1>
							<div className="button home_slider_button"><div className="button_bcg"></div><Link to="/">explore now<span></span><span></span><span></span></Link></div>
						</div>
					</div>
				</div>

				{/* <!-- Slider Item --> */}
				<div className="owl-item home_slider_item">
					<div className="home_slider_background" style={{ backgroundImage:'url(images/home_slider.jpg)' }}></div>

					<div className="home_slider_content text-center">
						<div className="home_slider_content_inner" data-animation-in="flipInX" data-animation-out="animate-out fadeOut">
							<h1>discover</h1>
							<h1>the world</h1>
							<div className="button home_slider_button"><div className="button_bcg"></div><Link to="/">explore now<span></span><span></span><span></span></Link></div>
						</div>
					</div>
				</div>

			</div>
			
			{/* <!-- Home Slider Nav - Prev --> */}
			<div className="home_slider_nav home_slider_prev">
				<svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					width="28px" height="33px" viewBox="0 0 28 33" enable-background="new 0 0 28 33" xmlSpace="preserve">
					<defs>
						<linearGradient id='home_grad_prev'>
							<stop offset='0%' stop-color='#fa9e1b'/>
							<stop offset='100%' stop-color='#8d4fff'/>
						</linearGradient>
					</defs>
					<path className="nav_path" fill="#F3F6F9" d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
					M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
					C22.545,2,26,5.541,26,9.909V23.091z"/>
					<polygon className="nav_arrow" fill="#F3F6F9" points="15.044,22.222 16.377,20.888 12.374,16.885 16.377,12.882 15.044,11.55 9.708,16.885 11.04,18.219 
					11.042,18.219 "/>
				</svg>
			</div>
			
			{/* <!-- Home Slider Nav - Next --> */}
			<div className="home_slider_nav home_slider_next">
				<svg version="1.1" id="Layer_3" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				width="28px" height="33px" viewBox="0 0 28 33" enable-background="new 0 0 28 33" xmlSpace="preserve">
					<defs>
						<linearGradient id='home_grad_next'>
							<stop offset='0%' stop-color='#fa9e1b'/>
							<stop offset='100%' stop-color='#8d4fff'/>
						</linearGradient>
					</defs>
				<path className="nav_path" fill="#F3F6F9" d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
				M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
				C22.545,2,26,5.541,26,9.909V23.091z"/>
				<polygon className="nav_arrow" fill="#F3F6F9" points="13.044,11.551 11.71,12.885 15.714,16.888 11.71,20.891 13.044,22.224 18.379,16.888 17.048,15.554 
				17.046,15.554 "/>
				</svg>
			</div>

			{/* <!-- Home Slider Dots --> */}

			<div className="home_slider_dots">
				<ul id="home_slider_custom_dots" className="home_slider_custom_dots">
					<li className="home_slider_custom_dot active"><div></div>01.</li>
					<li className="home_slider_custom_dot"><div></div>02.</li>
					<li className="home_slider_custom_dot"><div></div>03.</li>
				</ul>
			</div>
			
		</div>

	</div>


	<div className="search">
		

		{/* <!-- Search Contents --> */}
		
		<div className="container fill_height">
			<div className="row fill_height">
				<div className="col fill_height">

					{/* <!-- Search Tabs --> */}

					<div className="search_tabs_container">
						<div className="search_tabs d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
							<div className="search_tab active d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="images/suitcase.png" alt=""/><span>hotels</span></div>
							<div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="images/bus.png" alt=""/>car rentals</div>
							<div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="images/departure.png" alt=""/>flights</div>
							<div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="images/island.png" alt=""/>trips</div>
							<div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="images/cruise.png" alt=""/>cruises</div>
							<div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="images/diving.png" alt=""/>activities</div>
						</div>		
					</div>

					{/* <!-- Search Panel --> */}

					<div className="search_panel active">
						<form action="#" id="search_form_1" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
							<div className="search_item">
								<div>destination</div>
								<input type="text" className="destination search_input" required="required"/>
							</div>
							<div className="search_item">
								<div>check in</div>
								<input type="text" className="check_in search_input" placeholder="YYYY-MM-DD"/>
							</div>
							<div className="search_item">
								<div>check out</div>
								<input type="text" className="check_out search_input" placeholder="YYYY-MM-DD"/>
							</div>
							<div className="search_item">
								<div>adults</div>
								<select name="adults" id="adults_1" className="dropdown_item_select search_input">
									<option>01</option>
									<option>02</option>
									<option>03</option>
								</select>
							</div>
							<div className="search_item">
								<div>children</div>
								<select name="children" id="children_1" className="dropdown_item_select search_input">
									<option>0</option>
									<option>02</option>
									<option>03</option>
								</select>
							</div>
							<button className="button search_button">search<span></span><span></span><span></span></button>
						</form>
					</div>

					{/* <!-- Search Panel --> */}

					<div className="search_panel">
						<form action="#" id="search_form_2" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
							<div className="search_item">
								<div>destination</div>
								<input type="text" className="destination search_input" required="required"/>
							</div>
							<div className="search_item">
								<div>check in</div>
								<input type="text" className="check_in search_input" placeholder="YYYY-MM-DD"/>
							</div>
							<div className="search_item">
								<div>check out</div>
								<input type="text" className="check_out search_input" placeholder="YYYY-MM-DD"/>
							</div>
							<div className="search_item">
								<div>adults</div>
								<select name="adults" id="adults_2" className="dropdown_item_select search_input">
									<option>01</option>
									<option>02</option>
									<option>03</option>
								</select>
							</div>
							<div className="search_item">
								<div>children</div>
								<select name="children" id="children_2" className="dropdown_item_select search_input">
									<option>0</option>
									<option>02</option>
									<option>03</option>
								</select>
							</div>
							<button className="button search_button">search<span></span><span></span><span></span></button>
						</form>
					</div>

					{/* <!-- Search Panel --> */}

					<div className="search_panel">
						<form action="#" id="search_form_3" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
							<div className="search_item">
								<div>destination</div>
								<input type="text" className="destination search_input" required="required"/>
							</div>
							<div className="search_item">
								<div>check in</div>
								<input type="text" className="check_in search_input" placeholder="YYYY-MM-DD"/>
							</div>
							<div className="search_item">
								<div>check out</div>
								<input type="text" className="check_out search_input" placeholder="YYYY-MM-DD"/>
							</div>
							<div className="search_item">
								<div>adults</div>
								<select name="adults" id="adults_3" className="dropdown_item_select search_input">
									<option>01</option>
									<option>02</option>
									<option>03</option>
								</select>
							</div>
							<div className="search_item">
								<div>children</div>
								<select name="children" id="children_3" className="dropdown_item_select search_input">
									<option>0</option>
									<option>02</option>
									<option>03</option>
								</select>
							</div>
							<button className="button search_button">search<span></span><span></span><span></span></button>
						</form>
					</div>

					{/* <!-- Search Panel --> */}

					<div className="search_panel">
						<form action="#" id="search_form_4" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
							<div className="search_item">
								<div>destination</div>
								<input type="text" className="destination search_input" required="required"/>
							</div>
							<div className="search_item">
								<div>check in</div>
								<input type="text" className="check_in search_input" placeholder="YYYY-MM-DD"/>
							</div>
							<div className="search_item">
								<div>check out</div>
								<input type="text" className="check_out search_input" placeholder="YYYY-MM-DD"/>
							</div>
							<div className="search_item">
								<div>adults</div>
								<select name="adults" id="adults_4" className="dropdown_item_select search_input">
									<option>01</option>
									<option>02</option>
									<option>03</option>
								</select>
							</div>
							<div className="search_item">
								<div>children</div>
								<select name="children" id="children_4" className="dropdown_item_select search_input">
									<option>0</option>
									<option>02</option>
									<option>03</option>
								</select>
							</div>
							<button className="button search_button">search<span></span><span></span><span></span></button>
						</form>
					</div>

					{/* <!-- Search Panel --> */}

					<div className="search_panel">
						<form action="#" id="search_form_5" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
							<div className="search_item">
								<div>destination</div>
								<input type="text" className="destination search_input" required="required"/>
							</div>
							<div className="search_item">
								<div>check in</div>
								<input type="text" className="check_in search_input" placeholder="YYYY-MM-DD"/>
							</div>
							<div className="search_item">
								<div>check out</div>
								<input type="text" className="check_out search_input" placeholder="YYYY-MM-DD"/>
							</div>
							<div className="search_item">
								<div>adults</div>
								<select name="adults" id="adults_5" className="dropdown_item_select search_input">
									<option>01</option>
									<option>02</option>
									<option>03</option>
								</select>
							</div>
							<div className="search_item">
								<div>children</div>
								<select name="children" id="children_5" className="dropdown_item_select search_input">
									<option>0</option>
									<option>02</option>
									<option>03</option>
								</select>
							</div>
							<button className="button search_button">search<span></span><span></span><span></span></button>
						</form>
					</div>

					{/* <!-- Search Panel --> */}

					<div className="search_panel">
						<form action="#" id="search_form_6" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
							<div className="search_item">
								<div>destination</div>
								<input type="text" className="destination search_input" required="required"/>
							</div>
							<div className="search_item">
								<div>check in</div>
								<input type="text" className="check_in search_input" placeholder="YYYY-MM-DD"/>
							</div>
							<div className="search_item">
								<div>check out</div>
								<input type="text" className="check_out search_input" placeholder="YYYY-MM-DD"/>
							</div>
							<div className="search_item">
								<div>adults</div>
								<select name="adults" id="adults_6" className="dropdown_item_select search_input">
									<option>01</option>
									<option>02</option>
									<option>03</option>
								</select>
							</div>
							<div className="search_item">
								<div>children</div>
								<select name="children" id="children_6" className="dropdown_item_select search_input">
									<option>0</option>
									<option>02</option>
									<option>03</option>
								</select>
							</div>
							<button className="button search_button">search<span></span><span></span><span></span></button>
						</form>
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

export default Header;
