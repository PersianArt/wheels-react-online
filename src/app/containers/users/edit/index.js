import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserForm from '../../../components/forms/userForm';
import Api from '../../../../modules/api/apis';
import { Spinner } from '../../../components/table/spinner';
import { editUser } from '../../../../redux/actions/userActions';

class UserEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            userData: {}
        };
    }

    async componentDidMount() {
        try {
            const userData = await Api.getUserApi({id: this.props.match.params.id});
            this.setState({
                loading: false,
                userData: userData.data.data
            })
        } catch (e) {
            console.log(e);
        }
    }

    sendData = (data) => {
        console.log('data...', data);
        data.active = parseInt(data.active);
        this.props.editUser(data).then(
            res => this.props.history.push('/dashboard')
        );
    };

    render() {
        const { loading } = this.state;

        return (
            <div className='container'>
                <Spinner loading={loading}>
                    <UserForm defaultValue={this.state.userData} sendData={(data) => this.sendData(data)}/>
                </Spinner>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users
});

export default connect(mapStateToProps, {editUser})(UserEdit);

