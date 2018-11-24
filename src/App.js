import React, { Component } from "react";

import Navbar from "./Components/Navbar";
import Routes from "./Routes";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3B5998"
    },
    secondary: {
      main: "#8B9DC3"
    }
  },
  typography: {
    fontFamily: ["Source Sans Pro", "Roboto Condensed", "sans-serif"].join(",")
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Navbar />
        <Routes />
      </MuiThemeProvider>
    );
  }
}

export default App;
