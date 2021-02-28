import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './services/serviceWorker';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {TabMenu} from "primereact/tabmenu";
import {Home} from "./pages/Home"
import {Page2} from "./pages/Page2"

// import reportWebVitals from './reportWebVitals';


      const items= [
            // {label: 'Home', icon: 'pi pi-fw pi-home', url: '/'},
            {label: 'Home', icon: 'pi pi-fw pi-calendar', url: 'home'},
            {label: 'Page2', icon: 'pi pi-fw pi-pencil',url : 'page2'},
            // {label: 'Add Person', icon: 'pi pi-fw pi-pencil',url : 'AddPerson'},
        ]



const routing = (
    <Router>
        <div>
            <div className="nav-bar">
          <TabMenu model={items} />
          </div>

            <Route path="/" component={App} />
            <Route path="/home" component={Home} />
            <Route path="/Page2" component={Page2} />
            {/*<Route path="/AddPerson" component={AddPerson} />*/}
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();