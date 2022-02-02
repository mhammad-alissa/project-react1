import React, { Component } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import $ from "jquery";

export class Search extends Component {

    state = {
        images : {
            0 : "fa-car",
            1 : "fa-hotel",
            2 : "fa-utensils-alt",
            3 : "fa-suitcase-rolling",
            4 : "fa-hospital-alt",
            5 : "fa-shopping-cart",
        },
		booking : {
			service  : "",
			date     : "",
			time     : "",
			adults   : "0",
			children : "0",
		},	
		bookingErrors : {
			service  : "",
			date     : "",
			time     : "",
			adults   : true,
			children : true,
		},
        services         : [],
        servicesFiltered : [],
    }

    componentDidUpdate(prevProps , prevState) {
        if (this.props.services !== prevProps.services) {
        this.setState({
            servicesFiltered   : this.props.services.filter(service=>{return service.category_id === "1" }),
        })
        }
}

	BookingValues = (e) => {
		this.setState(preState => ({
			...preState , 
			booking : {
				...preState.booking , [e.target.name] : e.target.value
			}
		}))
	}

	BookClickHandler = (e) => {
		e.preventDefault();
		if(JSON.parse(localStorage.getItem("users"))) {
			let{service,date,time,adults,children} = this.state.booking
			let error = false
			for(let key in this.state.booking) {
				if(this.state.booking[key].trim() === "") {
					this.BookingErrors(key,true);
					error = true;
				}
				else {
					this.BookingErrors(key,false);
				}
			}
		if(!error) {
		let formData = new FormData();
		formData.append('user_id', +JSON.parse(localStorage.getItem("users")).id)
		formData.append('service_id', service)
		formData.append('delivery', 0)
		formData.append('time_of_day', time)
		formData.append('date_chosen', date)
		formData.append('adults', adults)
		formData.append('children', children)
		formData.append('status', "pending")
		formData.append('notes', "")
		
        axios({
            method: 'POST',
            url: 'http://localhost/project-react1/booking.php',
			data: formData,
			config: { headers: {'Content-Type': 'multipart/form-data' }},
        })
        .then((response) => {
            if(response.status === 200) {
				this.BookingClearValues()
                Swal.fire(
				'Booking Succesfull',
				`Booking ID is: ${response.data[1]} `,
				'success'
				)
            }
        })
        .catch(function (response) {
        });
			}
		}
		else {
			window.location.assign("/login")
		}
	}

	BookingClearValues = () => {
		this.setState(preState => ({
			...preState , booking : {
				    service  : "",
					date     : "",
					time     : "",
					adults   : "0",
					children : "0",
			}
			}
	))
	}

	BookingErrors = (key,status)=> {
		this.setState(preState => ({
			...preState, bookingErrors : {
				...preState.bookingErrors , [key] : status ? "This field is required" : ""
			}
		}))
	}

    IconClickHandler = (e) => {
        document.querySelectorAll(".icon").forEach(ele=>{
            ele.classList.remove("active")
        })
		 document.querySelectorAll("i").forEach(ele=>{
            ele.style.color = "#FBAC3D"
        })
        e.target.classList.add("active");
		e.target.querySelector('i').style.color="white"
        this.setState({
            servicesFiltered : this.props.services.filter(ele=>{return ele.category_id === e.target.id})
        })
    }

	componentDidMount(){
		$(function(){
    var dtToday = new Date();
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
    var maxDate = year + '-' + month + '-' + day;
    $('#txtDate').attr('min', maxDate);
	});
	}

  render() {
    return (
        <>
    	{/*  <!-- Search --> */}

	<div className="search">
		

		{/* <!-- Search Contents --> */}
		
		<div className="container fill_height">
			<div className="row fill_height">
				<div className="col fill_height">

					{/* <!-- Search Tabs --> */}

					<div className="search_tabs_container">
						<div className="search_tabs d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">

                            {this.props.categories.map((category,index)=>{
                                return  (<div onClick={(e)=>this.IconClickHandler(e)} id={category.id} key={category.id} className={`search_tab search-bar-landing ${index === 0 ? "active" : "" }  d-flex flex-row align-items-center justify-content-lg-center justify-content-start icon`}>
											<i style={{marginRight:"10px" , fontSize : "20px"}} className={`fas ${this.state.images[index]}`}></i>
                                            <span>{category.name}</span>
                                          </div>
                                          )
                            })}

						</div>		
					</div>

					{/* <!-- Search Panel --> */}
					<div className="search_panel active">
						<form id="search_form_1" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
							<div style={this.state.bookingErrors.service !== "" ? {marginTop:"32px"} : {} } className="search_item">
								<div>Services</div>
								<select name='service' defaultValue={"Choose a service"} onChange={(e)=>this.BookingValues(e)}  className="dropdown_item_select search_input">
									<option disabled >Choose a service</option>
									{
                                    this.state.servicesFiltered.map(service=>{
                                        return <option key={service.id} value={service.id}>{service.name}</option>
                                    })
                                }
								</select>	
								<label className='search-booking'>{this.state.bookingErrors.service}</label>						
                            </div>
							<div style={this.state.bookingErrors.date !== "" ? {marginTop:"32px"} : {} } className="search_item">
								<div>Date</div>
								<input id="txtDate" onChange={(e)=>this.BookingValues(e)} type="date" name='date' className="check_in search_input" value={this.state.booking.date} />
								<label className='search-booking'>{this.state.bookingErrors.date}</label>														
							</div>
							<div style={this.state.bookingErrors.time !== "" ? {marginTop:"32px"} : {} } className="search_item">
								<div>Time</div>
								<input onChange={(e)=>this.BookingValues(e)} type="Time" name='time' className="check_out search_input" value={this.state.booking.time} />
								<label className='search-booking'>{this.state.bookingErrors.time}</label>						
							</div>
							<div className="search_item">
								<div>adults</div>
								<input onChange={(e)=>this.BookingValues(e)} type="number" name='adults' min="0" placeholder='0' className="check_out search_input" value={this.state.booking.adults}/>
								{/* <label className='search-booking'>{this.state.bookingErrors.adults}</label>						 */}
							</div>
							<div className="search_item">
								<div>children</div>
								<input onChange={(e)=>this.BookingValues(e)} type="number" name='children' min="0" placeholder='0' className="check_out search_input"value={this.state.booking.children}/>
								{/* <label className='search-booking'>{this.state.bookingErrors.children}</label>						 */}
							</div>
							<button className="button search_button" onClick={(e)=>{this.BookClickHandler(e)}}>Book Now<span></span><span></span><span></span></button>
						</form>
					</div>
				</div>
			</div>
		</div>		
	</div>
    </>
    );
  }
}