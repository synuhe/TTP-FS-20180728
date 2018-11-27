import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { TextField, FormControl, Button } from "@material-ui/core";
import MaterialUIForm from "material-ui-form";
import styles from "../Styles/SignUpStyles";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSignup() {}

  render() {
    const { classes } = this.props;
    return (
      <MaterialUIForm onSubmit={this.handleLogin} className={classes.container}>
        <FormControl className={classes.margin}>
          <TextField
            id="username-input"
            name="username"
            label="Name"
            className={classes.textField}
            type="username"
            margin="normal"
            required
            onChange={this.handleChange}
          />
        </FormControl>
        <FormControl>
          <TextField
            id="email-input"
            name="email"
            label="Email"
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
            label="Password"
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
