import React from 'react';
import GoogleLogin from "react-google-login";
import {clientId} from "../../services/base_service";
import {get_storage, put_storage} from "../../services/StorageUtil";
import {Button} from "primereact/button";

// import axios from "axios";

class PersonalBar extends React.Component {

    constructor() {
        super();
        this.state = {};

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    async componentDidMount() {


    }

    getPersonalInformation() {


    }

    onSignIn(googleUser) {
        console.log("googleUser")
        console.log(googleUser)

        put_storage('google_user', googleUser);

        // console.log("From storage : ")
        // console.log(get_storage("google_user"))
        //
        // var profile = googleUser.getBasicProfile();
        // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        // put_storage('google_tokenId', googleUser.tokenId);
        // console.log('Name: ' + profile.getName());
        // console.log('Image URL: ' + profile.getImageUrl());
        // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }

    testButton() {

        // var google_tokenId = get_storage('google_tokenId');
        // window.localStorage.removeItem('googleProfile');
        console.log("google_tokenId from local Storage")
        console.log(get_storage("google_user"))

        // remove all
        // window.localStorage.clear();
    }


    render() {


        return (
            <div style={{margin: "10px"}}>

                This area can include some information about logged in user!! like name picture etc.
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Login"
                    onSuccess={this.onSignIn}
                    // onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    style={{marginTop: '100px'}}
                    isSignedIn={true}
                />

                <Button label="Test button" onClick={this.testButton}/>

            </div>

        )
    }
}

export default PersonalBar
