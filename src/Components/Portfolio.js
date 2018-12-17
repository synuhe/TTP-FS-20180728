import React, { Component } from "react";
import Axios from "axios";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { TextField, FormControl, Button } from "@material-ui/core";
import MaterialUIForm from "material-ui-form";
import styles from "../Styles/PortfolioStyles";

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      ticker: "",
      quantity: "",
      balance: ""
    };
    this.handleChange = this.handleChange.bind(this);
    // this.getUserTransactions = this.getUserTransactions.bind(this);
  }

  // componentDidMount() {
  //   this.getUserTransactions;
  // }

  // async getUserTransactions() {
  //   let userId =
  //     let data = Axios.get(`api/user/${userId}`)

  // }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <MaterialUIForm onSubmit={this.handleLogin} className={classes.container}>
        <FormControl className={classes.margin}>
          <TextField
            id="ticker-input"
            name="ticker"
            label="ticker"
            className={classes.textField}
            type="normal"
            margin="normal"
            required
            onChange={this.handleChange}
          />
        </FormControl>
        <FormControl>
          <TextField
            id="price-input"
            name="price"
            label="price"
            className={classes.textField}
            type="normal"
            margin="normal"
            pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
            required
            onChange={this.handleChange}
          />
        </FormControl>
        <FormControl className={classes.margin}>
          <TextField
            id="quantity-input"
            label="quantity"
            name="quantity"
            className={classes.textField}
            onChange={this.handleChange}
            type="normal"
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
          Purchase Shares
        </Button>
      </MaterialUIForm>
    );
  }
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Portfolio);
