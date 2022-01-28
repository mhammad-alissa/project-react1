import { borderRadius } from "@mui/system";
import React, { Component } from "react";

export class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      row: [],
      name: JSON.parse(localStorage.getItem("users"))[0].name,
      email: JSON.parse(localStorage.getItem("users"))[0].email,
      password: JSON.parse(localStorage.getItem("users"))[0].password,
      image: JSON.parse(localStorage.getItem("users"))[0].image,
      id: JSON.parse(localStorage.getItem("users"))[0].id,
    };
  }
  componentDidMount() {
    const axios = require("axios");

    // Make a request for a user with a given ID
    axios
      .get("http://localhost/project-react1/travelix/user.php")
      .then((response) => {
        // handle success
        console.log(response);
        let user = [
          {
            id: response.data[0].id,
            email: response.data[0].email,
            name: response.data[0].name,
            password: response.data[0].password,
            image: response.data[0].image,
          },
        ];
        localStorage.setItem("users", JSON.stringify(user));
        this.setState({
          row: JSON.parse(localStorage.getItem("users")),
          name: JSON.parse(localStorage.getItem("users"))[0].name,
          email: JSON.parse(localStorage.getItem("users"))[0].email,
          password: JSON.parse(localStorage.getItem("users"))[0].password,
          image: JSON.parse(localStorage.getItem("users"))[0].image,
          id: JSON.parse(localStorage.getItem("users"))[0].id,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
  userChange = (e) => {
    var id = e.target.id;
    this.setState({
      [e.target.name]: e.target.value,
    });
    document.getElementById(id).value = this.state[e.target.name];
  };
  userEdit = (e) => {
    const axios = require("axios");
    const obj = {
      id: this.state.id,
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post("http://localhost/project-react1/travelix/user.php", obj)
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.log(error.response);
      });
    this.setState({
      name: JSON.parse(localStorage.getItem("users"))[0].name,
      email: JSON.parse(localStorage.getItem("users"))[0].email,
      password: JSON.parse(localStorage.getItem("users"))[0].password,
      image: JSON.parse(localStorage.getItem("users"))[0].image,
      id: JSON.parse(localStorage.getItem("users"))[0].id,
    });
  };
  render() {
    return (
      <section>
        {/* <!-- Home --> */}

        <div className="home">
          <img
            className="home_background parallax-window"
            data-parallax="scroll"
            src="images/contact_background.jpg"
            alt="user profile"
          />
          <div className="home_content">
            <div className="home_title">User Profile</div>
          </div>
        </div>

        {/* <!-- Contact --> */}
        <br />
        <br />
        <div className="contact_form_section">
          <div className="container">
            <div className="row">
              <div className="col">
                {/* <!-- Contact Form --> */}
                <div className="contact_form_container">
                  <div className="contact_title text-center">
                    {/* {this.state.row.map((ele) => {
                      return (
                        <section>
                          <img
                            src={`userImages/${ele.image}`}
                            alt="user"
                            width={"90px"}
                            height={"90px"}
                          />
                          <h4>{ele.name}</h4>
                        </section>
                      );
                    })} */}
                    {JSON.parse(localStorage.getItem("users"))[0].name}
                  </div>
                  <img
                    src={`userImages/${this.state.image}`}
                    alt="user"
                    width={"90px"}
                    height={"90px"}
                    style={{ borderRadius: "50%" }}
                  />
                  <form id="contact_form" className="contact_form text-center">
                    <input
                      type="text"
                      id="contact_form_name"
                      className="contact_form_name input_field"
                      placeholder="Name"
                      required="required"
                      data-error="Name is required."
                      value={this.state.name}
                      onChange={this.userChange}
                      name="name"
                    />
                    <input
                      type="text"
                      id="contact_form_email"
                      className="contact_form_email input_field"
                      placeholder="E-mail"
                      required="required"
                      data-error="Email is required."
                      value={this.state.email}
                      onChange={this.userChange}
                      name="email"
                    />
                    <input
                      type="text"
                      id="contact_form_subject"
                      className="contact_form_subject input_field"
                      placeholder="Password"
                      required="required"
                      data-error="Subject is required."
                      value={this.state.password}
                      onChange={this.userChange}
                      name="password"
                    />
                    <button
                      onClick={this.userEdit}
                      id="form_submit_button"
                      className="form_submit_button button trans_200"
                    >
                      Update<span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default User;
