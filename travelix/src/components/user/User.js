import { borderRadius } from "@mui/system";
import React, { Component } from "react";
import axios from "axios";
export class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      row: [],
      name: JSON.parse(localStorage.getItem("user")).name,
      email: JSON.parse(localStorage.getItem("user")).email,
      password: JSON.parse(localStorage.getItem("user")).password,
      image: JSON.parse(localStorage.getItem("user")).image,
      id: JSON.parse(localStorage.getItem("user")).id,
      phone: JSON.parse(localStorage.getItem("user")).phone,
      url: "",
      selectedFile: "",
    };
  }
  // componentDidMount() {
  //   const axios = require("axios");

  //   // Make a request for a user with a given ID
  //   axios
  //     .get("http://localhost/project-react1/php/user.php")
  //     .then((response) => {
  //       // handle success
  //       console.log(response);
  //       let user = [
  //         {
  //           id: response.data[0].id,
  //           email: response.data[0].email,
  //           name: response.data[0].name,
  //           password: response.data[0].password,
  //           image: response.data[0].image,
  //           phone: response.data[0].phone,
  //         },
  //       ];
  //       localStorage.setItem("users", JSON.stringify(user));
  //       this.setState({
  //         row: JSON.parse(localStorage.getItem("users")),
  //         name: JSON.parse(localStorage.getItem("users"))[0].name,
  //         email: JSON.parse(localStorage.getItem("users"))[0].email,
  //         password: JSON.parse(localStorage.getItem("users"))[0].password,
  //         image: JSON.parse(localStorage.getItem("users"))[0].image,
  //         id: JSON.parse(localStorage.getItem("users"))[0].id,
  //         phone: JSON.parse(localStorage.getItem("users"))[0].phone,
  //         test: "true",
  //       });
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
  //     .then(function () {
  //       // always executed
  //       // window.location.href = "http://localhost:3000/User";
  //     });
  // }
  userChange = (e) => {
    var id = e.target.id;
    this.setState({
      [e.target.name]: e.target.value,
    });
    document.getElementById(id).value = this.state[e.target.name];
  };

  imageChange = (e) => {
    this.setState({
      image: e.target.value,
      selectedFile: e.target.files[0],
    });
  };

  userEdit = (e) => {
    // e.preventDefault();
    const formData = new FormData();
    formData.append("name", this.state.name);
    formData.append("id", this.state.id);
    formData.append("email", this.state.email);
    formData.append("password", this.state.password);
    formData.append("phone", this.state.phone);
    formData.append(
      "test",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    formData.append("image_name", this.state.selectedFile.name);
    // const obj = {
    //   id: this.state.id,
    //   name: this.state.name,
    //   email: this.state.email,
    //   password: this.state.password,
    //   phone: this.state.phone,
    //   image: (this.state.selectedFile, this.state.selectedFile.name),
    //   image_name: this.state.image.split(/(\\|\/)/g).pop(),
    //   // file: this.state.selectedFile,
    //   // url: URL.createObjectURL(e.target.files[0]),
    //   // file: e.target.files[0],
    // };

    axios({
      method: "post",
      url: "http://localhost/project-react1/php/user.php",
      data: formData,
      config: { headers: { "content-Type": "multipart/form-data" } },
    })
      .then((res) => {
        console.log(res.data);
        window.location.href = "http://localhost:3000/User";
      })
      .catch((error) => {
        console.log(error.response);
      });
    this.setState({
      name: JSON.parse(localStorage.getItem("user")).name,
      email: JSON.parse(localStorage.getItem("user")).email,
      password: JSON.parse(localStorage.getItem("user")).password,
      image: JSON.parse(localStorage.getItem("user")).image,
      id: JSON.parse(localStorage.getItem("user")).id,
      phone: JSON.parse(localStorage.getItem("user")).phone,
    });
    // e.preventDefault();
  };
  render() {
    localStorage.setItem("user");
    return (
      <section className="mb-4">
        {/* <!-- Home --> */}

        <div className="home mb-4">
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
        <div className="contact_form_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                {/* <!-- Contact Form --> */}
                <div className="contact_form_container">
                  <img
                    src={`userImages/${
                      JSON.parse(localStorage.getItem("user")).image
                    }`}
                    alt="user"
                    width={"90px"}
                    height={"90px"}
                    style={{ borderRadius: "50%" }}
                  />
                  <div className="contact_title text-center">
                    {JSON.parse(localStorage.getItem("user")).name}
                  </div>
                  <form id="contact_form" className="contact_form text-center">
                    <input
                      type="text"
                      id="contact_form_name"
                      className="contact_form_subject input_field"
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
                      className="contact_form_subject input_field"
                      placeholder="E-mail"
                      required="required"
                      data-error="Email is required."
                      value={this.state.email}
                      onChange={this.userChange}
                      name="email"
                    />
                    <input
                      type="text"
                      id="contact_form_email"
                      className="contact_form_subject input_field"
                      placeholder="Phone"
                      required="required"
                      data-error="Name is required."
                      value={this.state.phone}
                      onChange={this.userChange}
                      name="phone"
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
                    <input
                      type="file"
                      className="contact_form_subject input_field"
                      name="file"
                      onChange={this.imageChange}
                      filename={this.state.image}
                      required
                    />
                    <button
                      id="form_submit_button"
                      className="form_submit_button button trans_200"
                      onClick={this.userEdit}
                    >
                      Update
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-8">
                <h2>Bookings</h2>
                <table className="contact_form_container table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default User;
