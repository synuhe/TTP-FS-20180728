import React, { Component } from "react";
import Axios from "axios";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { TextField, FormControl, Button } from "@material-ui/core";
import MaterialUIForm from "material-ui-form";
import styles from "../Styles/SignUpStyles";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      users: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  async componentDidMount() {
    try {
      const response = await Axios.get("/api/users");
      const users = response.data;
      const arr = [];
      users.forEach(el => arr.push(el.email));
      this.setState({
        users: arr
      });
    } catch (err) {
      console.log(err);
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    let data = this.state.email;
    if (this.state.users.filter(el => el === data).length > 1) {
      alert("user email already exists, redirecting to login page");
      this.props.history.push("/login");
    }
  }

  async handleSignup(event) {
    event.preventDefault();
    try {
      let data = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      };
      await Axios.post("/api/users", data);
      this.props.history.push("/portfolio");
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <MaterialUIForm onSubmit={this.handleLogin} className={classes.container}>
        <FormControl className={classes.margin}>
          <TextField
            id="name-input"
            name="name"
            label="name"
            className={classes.textField}
            type="name"
            margin="normal"
            required
            onChange={this.handleChange}
          />
        </FormControl>
        <FormControl>
          <TextField
            id="email-input"
            name="email"
            label="email"
            className={classes.textField}
            type="email"
            margin="normal"
            pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
            required
            onChange={this.handleChange}
          />
        </FormControl>
        <FormControl className={classes.margin}>
          <TextField
            id="password-input"
            label="password"
            name="password"
            className={classes.textField}
            onChange={this.handleChange}
            type="password"
            autoComplete="current-password"
            required
            margin="normal"
          />
        </FormControl>
        <Button
          variant="outlined"
          type="submit"
          color="primary"
          onClick={this.handleSignup}
        >
          Signup
        </Button>
      </MaterialUIForm>
    );
  }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Signup);
