import React, { Component } from 'react';

export class Search extends Component {

    state = {
        images : {
            0 : "fa-utensils",
            1 : "suitcase.png",
            2 : "departure.png",
            3 : "island.png",
            4 : "cruise.png",
            5 : "diving.png",
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


    ClickHandler = (e) => {
        document.querySelectorAll(".icon").forEach(ele=>{
            ele.classList.remove("active")
        })
        e.target.classList.add("active");
        this.setState({
            servicesFiltered : this.props.services.filter(ele=>{return ele.category_id === e.target.id})
        })
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
                                return  (<div onClick={(e)=>this.ClickHandler(e)} id={category.id} key={category.id} className={`search_tab ${index === 0 ? "active" : "" }  d-flex flex-row align-items-center justify-content-lg-center jusify-content-start icon`}>
											<i class={`fas ${this.state.images[index]}`}></i>
                                            {/* <img src={`images/${this.state.images[index]}`} alt={category.name} /> */}
                                            <span>{category.name}</span>
                                          </div>
                                          )
                            })}

						</div>		
					</div>

					{/* <!-- Search Panel --> */}

					<div className="search_panel active">
						<form action="#" id="search_form_1" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
							<div className="search_item">
								<div>Services</div>
								<select  className="dropdown_item_select search_input">
									{
                                    this.state.servicesFiltered.map(service=>{
                                        return <option key={service.id} value={service.id}>{service.name}</option>
                                    })
                                }
								</select>							
                            </div>
							<div className="search_item">
								<div>check in</div>
								<input type="text" className="check_in search_input" placeholder="YYYY-MM-DD" />
							</div>
							<div className="search_item">
								<div>check out</div>
								<input type="text" className="check_out search_input" placeholder="YYYY-MM-DD" />
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
				</div>
			</div>
		</div>		
	</div>
    </>
    );
  }
}