import React from 'react';
// import GoogleLogin from "react-google-login";
// import {clientId} from "../../services/base_service";
import {Button} from "primereact/button";
import {put_storage, get_storage} from "../../services/StorageUtil";
import {TreeTable} from "primereact/treetable";
import {Column} from "primereact/column";
import {DataTable} from "primereact/datatable";


// import '../App.css';

export class MyFriends extends React.Component {

    constructor() {
        super();

        this.state = {

            friends : [],
            selected_friends : [],
            expanded_friends_row: null,

            // login : new Login(),

        };

        this.componentDidMount = this.componentDidMount.bind(this);

    }


     componentDidMount() {
    let google_user = get_storage("google_user");

    console.log(google_user)
        let data = {
            // "name" : "Ayberk Uslu",
            // "my_infos" : "asda",
                "friends":[
                    {  "id" : 0,"name": "Ayberk", "surname" : "Uslu", "Age": 22, "withFriendsSince" : "15.02.2021", "vaccines" : [{"vaccine": "covid19"}, {"vaccine": "asi1"}, {"vaccine": "asi2"}, {"vaccine": "asi3"}]} ,
                    {  "id" : 1, "name": "Ayberk2", "surname" : "Uslu2", "Age": 22, "withFriendsSince" :"15.02.2021", "vaccines" : [{"vaccine": "covid19"}, {"vaccine": "asi1"}, {"vaccine": "asi2"}, {"vaccine": "asi3"}]} ,
                    {  "id" : 2, "name": "Ayberk3", "surname" : "Uslu3", "Age": 22, "withFriendsSince" :"15.02.2021", "vaccines" : [{"vaccine": "covid19"}, {"vaccine": "asi1"}, {"vaccine": "asi2"}, {"vaccine": "asi3"}]} ,
                    {  "id" : 3, "name": "Ayberk4", "surname" : "Uslu4", "Age": 22, "withFriendsSince" :"15.02.2021", "vaccines" : [{"vaccine": "covid19"}, {"vaccine": "asi1"}, {"vaccine": "asi2"}, {"vaccine": "asi3"}]}
                ]
        };

    // let test_data = {
    //     "root": [
    //         {
    //             "key": "0",
    //             "data": {"name": "Applications", "size": "100kb", "type": "Folder"},
    //             "children": [{
    //                 "key": "0-0",
    //                 "data": {"name": "React", "size": "25kb", "type": "Folder"},
    //                 "children": [{
    //                     "key": "0-0-0",
    //                     "data": {"name": "react.app", "size": "10kb", "type": "Application"}
    //                 }, {
    //                     "key": "0-0-1",
    //                     "data": {"name": "native.app", "size": "10kb", "type": "Application"}
    //                 }, {"key": "0-0-2", "data": {"name": "mobile.app", "size": "5kb", "type": "Application"}}]
    //             }, {"key": "0-1", "data": {"name": "editor.app", "size": "25kb", "type": "Application"}}, {
    //                 "key": "0-2",
    //                 "data": {"name": "settings.app", "size": "50kb", "type": "Application"}
    //             }]
    //         },
    //         {
    //             "key": "1",
    //             "data": {"name": "Cloud", "size": "20kb", "type": "Folder"},
    //             "children": [{
    //                 "key": "1-0",
    //                 "data": {"name": "backup-1.zip", "size": "10kb", "type": "Zip"}
    //             }, {"key": "1-1", "data": {"name": "backup-2.zip", "size": "10kb", "type": "Zip"}}]
    //         },
    //         {
    //             "key": "2",
    //             "data": {"name": "Desktop", "size": "150kb", "type": "Folder"},
    //             "children": [{
    //                 "key": "2-0",
    //                 "data": {"name": "note-meeting.txt", "size": "50kb", "type": "Text"}
    //             }, {"key": "2-1", "data": {"name": "note-todo.txt", "size": "100kb", "type": "Text"}}]
    //         },
    //         {
    //             "key": "3",
    //             "data": {"name": "Documents", "size": "75kb", "type": "Folder"},
    //             "children": [{
    //                 "key": "3-0",
    //                 "data": {"name": "Work", "size": "55kb", "type": "Folder"},
    //                 "children": [{
    //                     "key": "3-0-0",
    //                     "data": {"name": "Expenses.doc", "size": "30kb", "type": "Document"}
    //                 }, {"key": "3-0-1", "data": {"name": "Resume.doc", "size": "25kb", "type": "Resume"}}]
    //             }, {
    //                 "key": "3-1",
    //                 "data": {"name": "Home", "size": "20kb", "type": "Folder"},
    //                 "children": [{"key": "3-1-0", "data": {"name": "Invoices", "size": "20kb", "type": "Text"}}]
    //             }]
    //         },
    //         {
    //             "key": "4",
    //             "data": {"name": "Downloads", "size": "25kb", "type": "Folder"},
    //             "children": [{
    //                 "key": "4-0",
    //                 "data": {"name": "Spanish", "size": "10kb", "type": "Folder"},
    //                 "children": [{
    //                     "key": "4-0-0",
    //                     "data": {"name": "tutorial-a1.txt", "size": "5kb", "type": "Text"}
    //                 }, {"key": "4-0-1", "data": {"name": "tutorial-a2.txt", "size": "5kb", "type": "Text"}}]
    //             }, {
    //                 "key": "4-1",
    //                 "data": {"name": "Travel", "size": "15kb", "type": "Text"},
    //                 "children": [{
    //                     "key": "4-1-0",
    //                     "data": {"name": "Hotel.pdf", "size": "10kb", "type": "PDF"}
    //                 }, {"key": "4-1-1", "data": {"name": "Flight.pdf", "size": "5kb", "type": "PDF"}}]
    //             }]
    //         },
    //         {
    //             "key": "5",
    //             "data": {"name": "Main", "size": "50kb", "type": "Folder"},
    //             "children": [{"key": "5-0", "data": {"name": "bin", "size": "50kb", "type": "Link"}}, {
    //                 "key": "5-1",
    //                 "data": {"name": "etc", "size": "100kb", "type": "Link"}
    //             }, {"key": "5-2", "data": {"name": "var", "size": "100kb", "type": "Link"}}]
    //         },
    //         {
    //             "key": "6",
    //             "data": {"name": "Other", "size": "5kb", "type": "Folder"},
    //             "children": [{"key": "6-0", "data": {"name": "todo.txt", "size": "3kb", "type": "Text"}}, {
    //                 "key": "6-1",
    //                 "data": {"name": "logo.png", "size": "2kb", "type": "Picture"}
    //             }]
    //         },
    //         {
    //             "key": "7",
    //             "data": {"name": "Pictures", "size": "150kb", "type": "Folder"},
    //             "children": [{
    //                 "key": "7-0",
    //                 "data": {"name": "barcelona.jpg", "size": "90kb", "type": "Picture"}
    //             }, {"key": "7-1", "data": {"name": "primeng.png", "size": "30kb", "type": "Picture"}}, {
    //                 "key": "7-2",
    //                 "data": {"name": "prime.jpg", "size": "30kb", "type": "Picture"}
    //             }]
    //         },
    //         {
    //             "key": "8",
    //             "data": {"name": "Videos", "size": "1500kb", "type": "Folder"},
    //             "children": [{
    //                 "key": "8-0",
    //                 "data": {"name": "primefaces.mkv", "size": "1000kb", "type": "Video"}
    //             }, {"key": "8-1", "data": {"name": "intro.avi", "size": "500kb", "type": "Video"}}]
    //         }
    //     ]
    // }


    this.setState({friends : data["friends"]});

    // let friend = {  "name": "Ayberk", "surname" : "Uslu", "Age": 22, "withFriendsSince" : "15.02.2021", "vaccines" : [ "covid19", "asi1", "asi2", "asi3"]
    //              }

    }



        formSubmissionsTemplate(data) {
        // let values = Object.values(data["vaccines"]);
        let values = data["vaccines"];
                // console.log(data["vaccines"])
                // console.log("Values : ", values)
        return (
            <div className="orders-subtable">
                {/*<h5>Submissions for {data.form_id}</h5>*/}
                <DataTable value={values}>
                    <Column field="vaccine" header="Vaccine" sortable/>
                    {/*<Column field="prettyFormat" header="Answer" sortable/>*/}
                </DataTable>
            </div>
        );
    }

    onRowExpand(event) {
        // this.toast.show({severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000});
    }

    onRowCollapse(event) {
        // this.toast.show({severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000});
    }




    render() {
        // let friends_header = <div className="p-clearfix" style={{'lineHeight': '1.87em'}}>
        //     Submissions for {(this.state.selectedFormDetail) ? this.state.selectedFormDetail : ""}
        // </div>;

        return (<div>



               My Friends
            {/*<div className="card">*/}
                {/*<h5>Multiple with MetaKey</h5>*/}
                <DataTable
                    value={this.state.friends}
                    selectionMode="multiple"
                    // selectionKeys={this.state.selected_friends}
                    selection={this.state.selected_friends}
                    onSelectionChange={e => this.setState({selected_friends : e.value})}
                    metaKeySelection={false}
                    // metaKeySelection
                    paginator={true}
                    // paginatorLeft={paginatorLeft}
                    // header={submissionsHeader}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} friends"
                    rows={10}
                    rowsPerPageOptions={[5, 10, 20]} style={{margin: "10px"}}
                    dataKey="id"
                    rowExpansionTemplate={this.formSubmissionsTemplate}
                    expandedRows={this.state.expanded_friends_row}
                    onRowToggle={(e) => this.setState({expanded_friends_row: e.data})}
                    onRowExpand={this.onRowExpand} onRowCollapse={this.onRowCollapse}
                    emptyMessage="There is no submission yet!"
                >
                    <Column  expander></Column>
                    <Column field="id" header="ID" ></Column>
                    <Column field="name" header="Name" ></Column>
                    <Column field="surname" header="Size"></Column>
                    {/*<Column field="type" header="Type"></Column>*/}
                </DataTable>
            {/*</div>*/}



            </div>
        );
    }
}

export default MyFriends;
