import React, { Component } from 'react';
import { Outlet, Link} from "react-router-dom";


class Footer extends Component {
  render() {
    return (
        <>
      <footer className="footer">
		<div className="container">
			<div className="row">

				{/* <!-- Footer Column --> */}
				<div className="col-lg-3 footer_column">
					<div className="footer_col">
						<div className="footer_content footer_about">
							<div className="logo_container footer_logo">
								<div className="logo"><Link to="/"><img src="images/logo.png" alt=""/>travelix</Link></div>
							</div>
							<p className="footer_about_text">Travleix, is an exclusive travel and lifestyle service, founded by Mashi Group 2022. Since its inception, it has encapsulated a simple idea: exceptional personal service at an unsurpassed level. </p>
							<ul className="footer_social_list">
								<li className="footer_social_item"><Link to="/"><i className="fa fa-pinterest"></i></Link></li>
								<li className="footer_social_item"><Link to="/"><i className="fa fa-facebook-f"></i></Link></li>
								<li className="footer_social_item"><Link to="/"><i className="fa fa-twitter"></i></Link></li>
								<li className="footer_social_item"><Link to="/"><i className="fa fa-dribbble"></i></Link></li>
								<li className="footer_social_item"><Link to="/"><i className="fa fa-behance"></i></Link></li>
							</ul>
						</div>
					</div>
				</div>

				{/* <!-- Footer Column --> */}
				<div className="col-lg-3 footer_column">
					<div className="footer_col">
						<div className="footer_title">blog posts</div>
						<div className="footer_content footer_blog">
							
							{/* <!-- Footer blog item --> */}
							<div className="footer_blog_item clearfix">
								<div className="footer_blog_image"><img src="images/footer_blog_1.jpg" alt="https://unsplash.com/@avidenov"/></div>
								<div className="footer_blog_content">
									<div className="footer_blog_title"><Link to="/">Travel with us this year</Link></div>
									<div className="footer_blog_date">Nov 29, 2017</div>
								</div>
							</div>
							
							{/* <!-- Footer blog item --> */}
							<div className="footer_blog_item clearfix">
								<div className="footer_blog_image"><img src="images/footer_blog_2.jpg" alt="https://unsplash.com/@deannaritchie"/></div>
								<div className="footer_blog_content">
									<div className="footer_blog_title"><Link to="/">New destinations for you</Link></div>
									<div className="footer_blog_date">Nov 29, 2017</div>
								</div>
							</div>

							{/* <!-- Footer blog item --> */}
							<div className="footer_blog_item clearfix">
								<div className="footer_blog_image"><img src="images/footer_blog_3.jpg" alt="https://unsplash.com/@bergeryap87"/></div>
								<div className="footer_blog_content">
									<div className="footer_blog_title"><Link to="/">Travel with us this year</Link></div>
									<div className="footer_blog_date">Nov 29, 2017</div>
								</div>
							</div>

						</div>
					</div>
				</div>

				{/* <!-- Footer Column --> */}
				<div className="col-lg-3 footer_column">
					<div className="footer_col">
						<div className="footer_title">tags</div>
						<div className="footer_content footer_tags">
							<ul className="tags_list clearfix">
								<li className="tag_item"><Link to="/">design</Link></li>
								<li className="tag_item"><Link to="/">fashion</Link></li>
								<li className="tag_item"><Link to="/">music</Link></li>
								<li className="tag_item"><Link to="/">video</Link></li>
								<li className="tag_item"><Link to="/">party</Link></li>
								<li className="tag_item"><Link to="/">photography</Link></li>
								<li className="tag_item"><Link to="/">adventure</Link></li>
								<li className="tag_item"><Link to="/">travel</Link></li>
							</ul>
						</div>
					</div>
				</div>

				{/* <!-- Footer Column --> */}
				<div className="col-lg-3 footer_column">
					<div className="footer_col">
						<div className="footer_title">contact info</div>
						<div className="footer_content footer_contact">
							<ul className="contact_info_list">
								<li className="contact_info_item d-flex flex-row">
									<div><div className="contact_info_icon"><img src="images/placeholder.svg" alt=""/></div></div>
									<div className="contact_info_text">Al 'abdali, Amman, Jordanr</div>
								</li>
								<li className="contact_info_item d-flex flex-row">
									<div><div className="contact_info_icon"><img src="images/phone-call.svg" alt=""/></div></div>
									<div className="contact_info_text">+962-7777-777-777</div>
								</li>
								<li className="contact_info_item d-flex flex-row">
									<div><div className="contact_info_icon"><img src="images/message.svg" alt=""/></div></div>
									<div className="contact_info_text"><Link to="mailto:contactme@gmail.com?Subject=Hello">contactme@gmail.com</Link></div>
								</li>
								<li className="contact_info_item d-flex flex-row">
									<div><div className="contact_info_icon"><img src="images/planet-earth.svg" alt=""/></div></div>
									<div className="contact_info_text"><Link to="/">www.colorlib.com</Link></div>
								</li>
							</ul>
						</div>
					</div>
				</div>

			</div>
		</div>
	</footer>
	 <Outlet />
	 </>
    );
  }
}

export default Footer;
