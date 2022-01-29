import React, { Component } from "react";
import "./login.css";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextBox from "../../core/textField/textField";
import axios from "axios";
import { Link } from "react-router-dom";

class login extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      password: "",
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const obj = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post("http://localhost/project-react1/php/login.php", obj)
      .then((res) => {
        const obj = {
          id: res.data.id,
          name: res.data.name,
          email: res.data.email,
          phone: res.data.phone,
          password: res.data.password,
          image: res.data.image,
        };
        console.log(res.data);
        localStorage.setItem("users", JSON.stringify(obj));
        window.location.href = "http://localhost:3000";
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  render() {
    return (
      <div className="card ">
        <Card className="cardStyle contact_form_container">
          <CardContent>
            <div className="signupText">LOGIN</div>
            <TextBox
              label="Email"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
            <TextBox
              label="Password"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </CardContent>

          <CardActions className="CardActions">
            <Button
              style={{ background: "black", color: "white" }}
              onClick={this.onSubmit}
            >
              {" "}
              LOGIN{" "}
            </Button>

            {/* <Button style={{background:'black',color:'white'}} onClick={this.onSubmit}> LOGIN</Button> */}
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default login;
