import React from 'react';
import GoogleLogin from "react-google-login";
import {clientId} from "../services/base_service";
import {Button} from "primereact/button";
import {TabPanel, TabView} from "primereact/tabview";
import MyGroups from "./my-page-components/MyGroups";
import FormGroup from "./my-page-components/FormGroup";
import {put_storage, get_storage} from "../services/StorageUtil";


export class Groups extends React.Component {

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


        return (<div>
                {/*<Login />*/}
                Groups can be formed here!
                <div className="card">
                <TabView className="tabview-custom">
                    <TabPanel header="My Groups" leftIcon="pi pi-user">

                        <MyGroups />

                    </TabPanel>
                    <TabPanel header="Form a Group" rightIcon="pi pi-user">

                        <FormGroup />

                    </TabPanel>
                </TabView>
            </div>
            </div>
        );
    }
}

export default Groups;
