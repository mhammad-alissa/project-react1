import React, { Component } from 'react';
import axios from 'axios';
import './contact_styles.css';
import Swal from "sweetalert2";


export class Contact extends Component {

	state = {
		contact : {
			name    : "",
			email   : "",
			subject : "",
			message : "",
		},
		errors : {
			name    : "",
			email   : "",
			subject : "",
			message : "",
		}
	}

	ContactHandler = (event) => {
	event.preventDefault()
	let regexEmail = /^[A-ZA-z0-9._-]+@(hotmail|gmail|yahoo|outlook).com$/;
	let {name, email, subject, message} = this.state.contact
	let error  = false;
	for(let key in this.state.contact){
		if(this.state.contact[key].trim() === "" ){
			error = true;	
			this.ErrorValues(key,true);		
		}
		else {
			this.ErrorValues(key,false);
			if(key === 'email' && !(regexEmail.test(this.state.contact[key]))) {
			this.setState( preState => ({
			...preState ,
		errors: {
			...preState.errors , [key]: "Must be Email"
		}
		}))
			}
		}
	}
	
	if(!error)
{
	  let formData = new FormData();
      formData.append('name', name)
      formData.append('email', email)
      formData.append('subject', subject)
      formData.append('message', message)

        axios({
            method: 'post',
            url: 'http://localhost/project-react1/php/contact_landing.php',
			data: formData,
			config: { headers: {'Content-Type': 'multipart/form-data' }},
        })
        .then((response) => {
            if(response.status === 200) {
				this.ClearContactValues()
                Swal.fire(
				'Sent Succesfully',
				'Thank you for contacting us',
				'success'
				)
            }
        })
        .catch(function (response) {
            console.log(response)
        });
	}
  }    

  	ErrorValues = (key,status) => {
			this.setState( preState => ({
			...preState ,
		errors: {
			...preState.errors , [key]: status ? "This field is required" : ""
		}
		}))  
	  }

	  ClearContactValues = () => {
		  this.setState({
			  contact : {
				  	name    : "",
					email   : "",
					subject : "",
					message : "",
			  }
		  })
	  }

	ContactValues = (event) => {
		this.setState( preState => ({
			...preState ,
		contact: {
			...preState.contact , [event.target.name]: event.target.value
		}
		}))
	}

  render() {
    return (
    	<div className="contact">
		<div className="contact_background" style={{backgroundImage:"url(images/contact.png)"}}></div>

		<div className="container">
			<div className="row">
				<div className="col-lg-5">
					<div className="contact_image">
						
					</div>
				</div>
				<div className="col-lg-7">
					<div className="contact_form_container">
						<div className="contact_title">get in touch</div>
						<form className="contact_form">
							<div>
								<input value={this.state.contact.name} autoComplete='off' type="text"  className="contact_form_name input_field" placeholder="Name"  name='name' onInput={this.ContactValues} />
								<label htmlFor="">{this.state.errors.name}</label>
							</div>
							<div>
								<input value={this.state.contact.email} autoComplete='off' type="email"  className="contact_form_email input_field" placeholder="E-mail"  name='email' onInput={this.ContactValues} />
								<label htmlFor="">{this.state.errors.email}</label>
							</div>
							<div>
								<input value={this.state.contact.subject} autoComplete='off' type="text" className="contact_form_subject input_field" placeholder="Subject"  name='subject' onInput={this.ContactValues} />
								<label htmlFor="">{this.state.errors.subject}</label>								
							</div>
							<div>
								<textarea value={this.state.contact.message}  className="text_field contact_form_message" name="message" rows="4" placeholder="Message" onInput={this.ContactValues} ></textarea>
								<label htmlFor="">{this.state.errors.message}</label>								
							</div>
							<button onClick={(e)=>this.ContactHandler(e)} className="form_submit_button button">send message<span></span><span></span><span></span></button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
        );
  }
}

export default Contact;
