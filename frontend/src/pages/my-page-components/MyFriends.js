import React from 'react';
// import GoogleLogin from "react-google-login";
// import {clientId} from "../../services/base_service";
import {Button} from "primereact/button";
// import {put_storage, get_storage} from "../../services/StorageUtil";


// import '../App.css';

export class MyFriends extends React.Component {

    constructor() {
        super();

        this.state = {

            // login : new Login(),

        };

        this.componentDidMount = this.componentDidMount.bind(this);

    }


    async componentDidMount() {


    }




    render() {


        return (<div>



               My Friends



                <Button label="Test button"  />

            </div>
        );
    }
}

export default MyFriends;
