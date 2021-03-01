import React from 'react';
import GoogleLogin from "react-google-login";
import {clientId} from "../services/base_service";
import {Button} from "primereact/button";

// import '../App.css';

export class Home extends React.Component {

    constructor() {
        super();

        this.state = {

            // login : new Login(),

        };

        this.componentDidMount = this.componentDidMount.bind(this);
        this.onSignIn = this.onSignIn.bind(this);
        this.testButton = this.testButton.bind(this);


    }


    async componentDidMount() {


    }

    onSignIn(googleUser) {
        console.log("googleUser")
        console.log(googleUser)
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        window.localStorage.setItem('google_tokenId', googleUser.tokenId);
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }

    testButton() {

        var google_tokenId = window.localStorage.getItem('google_tokenId');
        // window.localStorage.removeItem('googleProfile');
        console.log("google_tokenId from local Storage")
        console.log(google_tokenId)

        // remove all
        // window.localStorage.clear();
    }


    render() {


        return (<div>
                {/*<Login />*/}
                {/*<div className="g-signin2" data-onsuccess="onSignIn"/>*/}


                Check console Logs for google auth details!!

                <GoogleLogin
                    clientId={clientId}
                    buttonText="Login"
                    onSuccess={this.onSignIn}
                    // onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    style={{marginTop: '100px'}}
                    isSignedIn={true}
                />

                <Button label="Test button" onClick={this.testButton} />

            </div>
        );
    }
}

export default Home;
