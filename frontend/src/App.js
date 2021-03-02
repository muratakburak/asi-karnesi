import React from 'react';

import "./css/custom.css";
// import axios from "axios";
// import {BASE_URL, BUILD_HEADER} from "./services/base_service";
import PersonalBar from "./pages/bar-components/PersonalBar";

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
          <div style={{height:"6vh"}}>

This area can include some information about logged in user!! like name picture etc.
            <PersonalBar/>
        </div>
            <hr/>
        </div>

    )
  }
}
export default App
