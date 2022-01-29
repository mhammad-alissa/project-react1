import "./signup.css";
import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextBox from "../../core/textField/textField";
// import H from './H';

import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import history from "../../History";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeImageform = this.onChangeImageform.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePasswordconform = this.onChangePasswordconform.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      phone: "",
      password: "",
      passwordConform: "",
      image: "",
      error: "",
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePhone(e) {
    this.setState({
      phone: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onChangePasswordconform(e) {
    this.setState({
      passwordConform: e.target.value,
    });
  }
  onChangeImageform(e) {
    this.setState({
      image: e.target.files[0],
    });
  }

  onSubmit(e) {
    var bool = true;

    let regexPass =
      /^(?=.*[A-Z])(?=.*[@$!%*#?&])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
    let regexEmail = /^[a-z0-9._-]+@(gmail|yahoo|hotmail).com$/;
    // let regexMobile = /^[0][7][7][0-9]{7}$/;
    // let regexfullname            = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){3}$/;

    // fullname
    const fullName = document.getElementById("fullName");
    const fullNameMessageError = document.getElementById(
      "fullNameMessageError"
    );

    // email
    const email = document.getElementById("email");
    const emailMessageError = document.getElementById("emailMessageError");

    const phoneMessageError = document.getElementById("phoneMessageError");

    // password
    const pass = document.getElementById("pass");
    const passMessageError = document.getElementById("passMessageError");

    const ConfirmPass = document.getElementById("ConfirmPass");
    const ConfirmPassMessageError = document.getElementById(
      "ConfirmPassMessageError"
    );

    // fullname condition
    fullNameMessageError.innerText = "";
    if (this.state.name === "") {
      fullNameMessageError.innerText = "User Name is empty";
      bool = false;
    }

    // email condition
    emailMessageError.innerText = "";
    if (this.state.email === "") {
      emailMessageError.innerText = "Email is empty";
      bool = false;
    } else if (!this.state.email.match(regexEmail)) {
      emailMessageError.innerText = "Email is not valid";
      bool = false;
    }
    // phone condition
    if (this.state.phone === "") {
      phoneMessageError.innerText = "phone is empty";
      bool = false;
    }

    // password condition
    passMessageError.innerText = "";
    if (this.state.password === "") {
      passMessageError.innerText = "password is empty";
      bool = false;
    } else if (!this.state.password.match(regexPass)) {
      passMessageError.innerText = "password is not valid";
      bool = false;
    }
    // password confirm condition
    ConfirmPassMessageError.innerText = "";
    if (this.state.passwordConform === "") {
      ConfirmPassMessageError.innerText = "confirm password is empty";
      bool = false;
    } else if (this.state.passwordConform !== this.state.password) {
      ConfirmPassMessageError.innerText = "confirm password is not match";
      bool = false;
    }

    if (bool === true) {
      const formData = new FormData();
      formData.append("name", this.state.name);
      formData.append("email", this.state.email);
      formData.append("phone", this.state.phone);
      formData.append("password", this.state.password);
      formData.append("passwordConform", this.state.passwordConform);
      formData.append("image", this.state.image, this.state.image.name);
      formData.append("image_name", this.state.image.name);
      axios({
        method: "post",
        url: "http://localhost/project-react1/php/sign.php",
        data: formData,
        config: { headers: { "content-Type": "multipart/form-data" } },
      })
        .then((res) => {
          if (res.data !== "The email you entered already exists") {
            const obj = {
              name: res.data.name,
              email: res.data.email,
              phone: res.data.phone,
              password: res.data.password,
              image: res.data.image_name,
            };
            localStorage.setItem("user", JSON.stringify(obj));
            window.location.href = "http://localhost:3000";
            console.log(res.data);
          } else {
            this.setState({
              error: res.data,
            });
          }
        })
        .catch((error) => {
          console.log(error.response);
        });

      this.setState({
        name: "",
        email: "",
        phone: "",
        password: "",
        passwordConform: "",
        image: "",
      });
      e.preventDefault();
    }
  }
  render() {
    return (
      <div className="card">
        <Card className="cardStyle">
          <CardContent>
            <form>
              <div className="signupText">SIGNUP</div>
              <TextBox
                label="Full Name"
                value={this.state.name}
                onChange={this.onChangeName}
              />
              <small id="fullNameMessageError" className="form-text"></small>

              <TextBox
                label="Email"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
              <small id="emailMessageError" className="form-text"></small>

              <TextBox
                label="Phone Number"
                value={this.state.phone}
                onChange={this.onChangePhone}
              />
              <small id="phoneMessageError" className="form-text"></small>

              <TextBox
                label="Password"
                value={this.state.password}
                onChange={this.onChangePassword}
              />
              <small id="passMessageError" className="form-text"></small>

              <TextBox
                label="Conform Password"
                value={this.state.passwordConform}
                onChange={this.onChangePasswordconform}
              />
              <small id="ConfirmPassMessageError" className="form-text"></small>

              <Button variant="contained" component="label" className="mt-4">
                Upload File
                <input type="file" hidden onChange={this.onChangeImageform} />
              </Button>
              {/* <input type="submit" onClick={this.onSubmit}> cjkqjwjkjw</input> */}
            </form>
          </CardContent>

          <CardActions className="CardActions">
            <Button
              style={{ background: "black", color: "white" }}
              onClick={this.onSubmit}
            >
              SIGNUP{" "}
            </Button>
            <small style={{ color: "red", display: "inline-block" }}>
              {this.state.error}
            </small>
            {/* <button onClick={()=> History.push('/')} className="Home-button"></button>   */}
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Signup;
