import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { FormControl, Button, TextField, Snackbar } from "@material-ui/core";
import { Notification } from "./Notification";
import MaterialUIForm from "material-ui-form";
import styles from "../Styles/LoginStyles";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      snackBarOpen: false,
      snackBarVariant: "",
      snackBarMessage: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLogin() {}

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({
      snackBarOpen: false
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <MaterialUIForm onSubmit={this.handleLogin} className={classes.container}>
        <FormControl className={classes.margin}>
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
          color="primary"
          type="submit"
          onClick={this.handleLogin}
        >
          Login
        </Button>

        {/* <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          open={this.state.snackBarOpen}
          autoHideDuration={4000}
          onClose={this.handleClose}
        >
          <Notification
            onClose={this.handleClose}
            variant={this.state.snackBarVariant}
            message={this.state.snackBarMessage}
          />
        </Snackbar> */}
      </MaterialUIForm>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
