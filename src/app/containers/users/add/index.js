import React, { Component } from 'react';

import UserForm from "../../../components/forms/userForm";
import Api from "../../../../modules/api/apis";

class UserAdd extends Component {

    sendData = (data) => {
        console.log('data...', data);
        data.active = parseInt(data.active);
        Api.addUserApi(data).then(
            res => this.props.history.push('/dashboard')
        );
    };

    render() {

        return (
            <div className='container'>
                <UserForm sendData={(data) => this.sendData(data)}/>
            </div>
        )
    }
}

export default UserAdd;

