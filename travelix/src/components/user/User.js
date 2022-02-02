import React, { Component } from "react";
import axios from "axios";
export class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      row: [],
      name: JSON.parse(localStorage.getItem("users")).name,
      email: JSON.parse(localStorage.getItem("users")).email,
      password: JSON.parse(localStorage.getItem("users")).password,
      image: JSON.parse(localStorage.getItem("users")).image,
      id: JSON.parse(localStorage.getItem("users")).id,
      phone: JSON.parse(localStorage.getItem("users")).phone,
      url: "",
      selectedFile: "",
      booking: [],
    };
  }

  componentDidMount() {
        this.props.ScrollUp();
    const url = "http://localhost/project-react1/php/userbooking.php";
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ booking: data });
        console.log(this.state.booking);
      });
  }
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
    formData.append("image", this.state.selectedFile.name);

    axios({
      method: "post",
      url: "http://localhost/project-react1/php/user.php",
      data: formData,
      config: { headers: { "content-Type": "multipart/form-data" } },
    })
      .then((res) => {
        localStorage.setItem("users", JSON.stringify(res.data));
        console.log(res.data);
        window.location.href = "http://localhost:3000/User";
      })
      .catch((error) => {
        console.log(error.response);
      });
    this.setState({
      name: JSON.parse(localStorage.getItem("users")).name,
      email: JSON.parse(localStorage.getItem("users")).email,
      password: JSON.parse(localStorage.getItem("users")).password,
      image: JSON.parse(localStorage.getItem("users")).image,
      id: JSON.parse(localStorage.getItem("users")).id,
      phone: JSON.parse(localStorage.getItem("users")).phone,
    });
    // e.preventDefault();
  };
  render() {
    var id = JSON.parse(localStorage.getItem("users")).id;
    return (
      <section className="mb-4">
        {/* <!-- Home --> */}

        <div className="home mb-4">
          <img
            className="home_background parallax-window"
            data-parallax="scroll"
            src="images/contact_background.jpg"
            alt="user profile"
            style={{ width: "auto" }}
          />
          <div className="home_content">
            <div className="home_title">User Profile</div>
          </div>
        </div>

        {/* <!-- Contact --> */}
        <div className="contact_form_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                {/* <!-- Contact Form --> */}
                <div className="contact_form_container">
                  <img
                    className="user-profile-image"
                    src={`userImages/${
                      JSON.parse(localStorage.getItem("users")).image
                    }`}
                    alt="user"
                    width={"90px"}
                    height={"90px"}
                    style={{ borderRadius: "50%", marginLeft: "32%" }}
                  />
                  <div className="contact_title text-center">
                    {JSON.parse(localStorage.getItem("users")).name}
                  </div>
                  <form id="contact_form" className="contact_form text-center">
                    <div
                      style={{
                        color: "white",
                        fontSize: "14px",
                        textAlign: "start",
                        fontWeight: "bolder",
                      }}
                    >
                      Name
                    </div>
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
                      style={{ marginBottom: "35px" }}
                    />
                    <div
                      style={{
                        color: "white",
                        fontSize: "14px",
                        textAlign: "start",
                        fontWeight: "bolder",
                      }}
                    >
                      Email
                    </div>
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
                      style={{ marginBottom: "35px" }}
                    />
                    <div
                      style={{
                        color: "white",
                        fontSize: "14px",
                        textAlign: "start",
                        fontWeight: "bolder",
                      }}
                    >
                      Phone
                    </div>
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
                      style={{ marginBottom: "35px" }}
                    />
                    <div
                      style={{
                        color: "white",
                        fontSize: "14px",
                        textAlign: "start",
                        fontWeight: "bolder",
                      }}
                    >
                      Password
                    </div>
                    <input
                      type="password"
                      id="contact_form_subject"
                      className="contact_form_subject input_field"
                      placeholder="Password"
                      required="required"
                      data-error="Subject is required."
                      value={this.state.password}
                      onChange={this.userChange}
                      name="password"
                      style={{ marginBottom: "35px" }}
                    />
                    <div
                      style={{
                        color: "white",
                        fontSize: "14px",
                        textAlign: "start",
                        fontWeight: "bolder",
                      }}
                    >
                      Image
                    </div>
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
                      style={{ margin: "auto" }}
                    >
                      Update
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-8">
                <h2>Bookings</h2>
                <div className="table-responsive">
                  <table className="contact_form_container table text-white">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Service Name</th>
                        <th scope="col">Delivery</th>
                        <th scope="col">Booking Date</th>
                        <th scope="col">Time of Day</th>
                        <th scope="col">Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.booking
                        .filter((ele) => {
                          return ele.user_id === `${id}`;
                        })
                        .map((row) => {
                          return (
                            <tr key={row.id}>
                              <th scope="row">{row.booking_id}</th>
                              <td>{row.user_name}</td>
                              <td>{row.service_name}</td>
                              <td>{`${row.delivery ? "Yes" : "No"}`}</td>
                              <td>{row.booking_date}</td>
                              <td>{row.time_of_day}</td>
                              <td>{row.date_chosen}</td>
                              <td>{row.status}</td>
                              <td>{row.notes}</td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
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
