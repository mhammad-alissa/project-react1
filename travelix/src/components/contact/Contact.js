import React, { Component } from 'react';
import axios from 'axios';
import './contact.css'
// import { Link } from 'react-router-dom';

export class Contact extends Component {

	constructor(props){
		super(props);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleSubjectChange = this.handleSubjectChange.bind(this);
		this.handleMessageChange = this.handleMessageChange.bind(this);

		this.state={
			name:"",
			email:"",
			subject:"",
			message:""
		}
	}

	handleNameChange=(event)=>{
		this.setState({
			name:event.target.value
		})
	}
	handleEmailChange=(event)=>{
		this.setState({
			email:event.target.value
		})
	}
	handleSubjectChange=(event)=>{
		this.setState({
			subject:event.target.value
		})
	}
	handleMessageChange=(event)=>{
		this.setState({
			message:event.target.value
		})
	}
	handleSubmitChange=(event)=>{
		event.preventDefault();
		console.log(event);

		const obj ={
			name:this.state.name,
        	email:this.state.email,
			subject:this.state.subject,
			message:this.state.message
          };

		axios.post('http://localhost/project-react1/php/contact.php',obj)

		

		this.setState({
			name:"",
			email:"",
			subject:"",
			message:""
		})
		
	}

	
	
  render() {
    return (
    	<div className="contact">
		{/* <!-- Home --> */}
		<div className="home ">
		<img
            className="home_background parallax-window"
            data-parallax="scroll"
            src="images/contact_background.jpg"
            alt="user profile"
          />
			<div className="home_content">
				<div className="home_title">contact</div>
			</div>
		</div>

		{/* <!-- Contact --> */}
		<div className="container C-container">
			<div className="row">
				<div className="col-lg-12" >
					<div className="contact_form_container">
						<div className="contact_title">get in touch</div>
						<form id="contact_form" className="contact_form">
							<input type="text"  value={this.state.name} onChange={this.handleNameChange} id="contact_form_name" className="contact_form_name input_field" placeholder="Name" required data-error="Name is required."/>
							<input type="text"  value={this.state.email} onChange={this.handleEmailChange} id="contact_form_email" className="contact_form_email input_field" placeholder="E-mail" required  data-error="Email is required."/>
							<input type="text"  value={this.state.subject} onChange={this.handleSubjectChange} id="contact_form_subject" className="contact_form_subject input_field" placeholder="Subject" required  data-error="Subject is required."/>
							<textarea id="contact_form_message"  value={this.state.message} onChange={this.handleMessageChange} className="text_field contact_form_message" name="message" rows="4" placeholder="Message" required  data-error="Please, write us a message."></textarea>
							<button type="submit" value="submit" id="form_submit_button" onClick={this.handleSubmitChange} className="form_submit_button button">send message<span></span><span></span><span></span></button>
						</form>
					</div>
				</div>
			</div>
		</div>


	{/* <!-- About --> */}
	<div className="about">
		<div className="container aboutContainer">
			<div className="row">
				<div className="col-lg-5">
					
					{/* <!-- About - Image --> */}

					<div className="about_image">
						<img src="images/man.png" alt=""/>
					</div>

				</div>

				<div className="col-lg-4">
					
					{/* <!-- About - Content --> */}

					<div className="about_content">
						<div className="logo_container about_logo">
							<div className="logo"><a href="#"><img src="images/logo.png" alt="" />travelix</a></div>
						</div>
						<p className="about_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vu lputate eros, iaculis consequat nisl. Nunc et suscipit urna. Integer eleme ntum orci eu vehicula iaculis consequat nisl. Nunc et suscipit urna pretium.</p>
						<ul className="about_social_list">
							<li className="about_social_item"><a href="#"><i className="fa fa-pinterest"></i></a></li>
							<li className="about_social_item"><a href="#"><i className="fa fa-facebook-f"></i></a></li>
							<li className="about_social_item"><a href="#"><i className="fa fa-twitter"></i></a></li>
							<li className="about_social_item"><a href="#"><i className="fa fa-dribbble"></i></a></li>
							<li className="about_social_item"><a href="#"><i className="fa fa-behance"></i></a></li>
						</ul>
					</div>

				</div>

				<div className="col-lg-3">
					
					{/* <!-- About Info --> */}

					<div className="about_info">
						<ul className="contact_info_list">
							<li className="contact_info_item d-flex flex-row">
								<div><div className="contact_info_icon"><img src="images/placeholder.svg" alt="" /></div></div>
								<div className="contact_info_text">4127 Raoul Wallenber 45b-c Gibraltar</div>
							</li>
							<li className="contact_info_item d-flex flex-row">
								<div><div className="contact_info_icon"><img src="images/phone-call.svg" alt="" /></div></div>
								<div className="contact_info_text">2556-808-8613</div>
							</li>
							<li className="contact_info_item d-flex flex-row">
								<div><div className="contact_info_icon"><img src="images/message.svg" alt="" /></div></div>
								<div className="contact_info_text"><a href="mailto:contactme@gmail.com?Subject=Hello" target="_top">contactme@gmail.com</a></div>
							</li>
							<li className="contact_info_item d-flex flex-row">
								<div><div className="contact_info_icon"><img src="images/planet-earth.svg" alt="" /></div></div>
								<div className="contact_info_text"><a href="https://colorlib.com">www.colorlib.com</a></div>
							</li>
						</ul>
					</div>

				</div>

			</div>
		</div>
	</div>
	</div>
        );
  }
}

export default Contact;




