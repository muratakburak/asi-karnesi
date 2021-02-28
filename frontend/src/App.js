import React from 'react';

import "./css/custom.css";
import axios from "axios";
import {BASE_URL, BUILD_HEADER} from "./services/base_service";

class App extends React.Component {

  constructor() {
    super();
    this.state = {

    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {

  }






  render() {


    return (

          <div>

This is app!

        </div>

    )
  }
}
export default App
