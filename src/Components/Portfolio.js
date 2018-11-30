import React, { Component } from "react";
import Axios from 'axios';

class Portfolio extends Component {
  constructor () {
    super () 
    this.state = {
      ticker: '',
      quantity: '',
      balance: '', 
    }
    this.handleChange = this.handleChange.bind(this)
    this.getUserTransactions = this.getUserTransactions.bind(this)
  }
  
  componentDidMount () {
    this.getUserTransactions
  }
  
  async getUserTransactions () {
    let userId = 
    let data = Axios.get(`api/user/${userId}`)
    
  }
  
  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  
}