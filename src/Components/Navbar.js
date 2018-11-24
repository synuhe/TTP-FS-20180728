import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from "@material-ui/core";
import { Work } from "@material-ui/icons/";
import styles from "../Styles/NavbarStyles";

class Navbar extends Component {
  constructor() {
    super();
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout = () => {
    this.props.push("/");
  };

  loginPush = () => {
    this.props.history.push("/login");
  };

  signupPush = () => {
    this.props.history.push("/signup");
  };

  homePush = () => {
    this.props.history.push("/");
  };

  transactions = () => {
    this.props.history.push("/transactions");
  };

  portfolioPush = () => {
    this.props.history.push("/portfolio");
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.height}>
          <Toolbar>
            <Button color="inherit" onClick={this.homePush}>
              <Typography
                variant="title"
                color="inherit"
                className={classes.logo}
              >
                stocks
              </Typography>
            </Button>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            />
            {this.props.user ? (
              <div>
                <Button color="inherit" onClick={this.transactions}>
                  Transaction History
                </Button>
                <Button color="inherit" onClick={this.handleLogout}>
                  Logout
                </Button>
                <IconButton className={classes.menuButton} color="inherit">
                  <Work onClick={this.portfolioPush} />
                </IconButton>
              </div>
            ) : (
              <div>
                <Button color="inherit" onClick={this.loginPush}>
                  Login
                </Button>
                <Button color="inherit" onClick={this.signupPush}>
                  Signup
                </Button>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(Navbar));
