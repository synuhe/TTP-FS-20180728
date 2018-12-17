import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Snackbar, Button } from "@material-ui/core";
import Notification from "./Notification";
import styles from "../Styles/HomepageStyles";

const image =
  "https://www.xm.com/wp-content/uploads/2017/11/Stock-Charts-7-1.jpg";

let imageStyles = {
  width: "100%",
  height: "100%",
  position: "absolute",
  backgroundSize: "cover"
};

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popupOpen: false
    };
  }

  componentDidMount() {
    this.setState({
      popupOpen: this.props.popupOpen
    });
  }

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ popupOpen: false });
  };

  signupPush = () => {
    this.props.history.push("/signup");
  };

  render() {
    const { classes } = this.props;
    return (
      <div style={{ marginTop: "50px" }}>
        <div className="slideList">
          <img style={imageStyles} src={image} alt="stockimage" />
          <div className={classes.infoCard}>
            <p>
              $tocks
              <br />
              <br />
              <i>$tocks is an online stock exchange and portfolio simulator</i>
              <br />
              <br />
              Sign up now to get started using $tocks
              <br />
            </p>
            <Button onClick={this.signupPush} className={classes.button}>
              Sign Up
            </Button>
          </div>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={this.state.popupOpen}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <Notification
            onClose={this.handleClose}
            variant="warning"
            message="Sorry you must be logged in to see the page you are trying to access"
          />
        </Snackbar>
      </div>
    );
  }
}

export default withStyles(styles)(Homepage);
