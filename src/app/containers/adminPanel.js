import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import Title from '../components/title';
import { getUsers } from '../../redux/actions/userActions';

import UsersList from './users';
import UserAdd from "./users/add";
import UserEdit from "./users/edit";

class AdminPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editedId: 0,
        };
    }

    componentDidMount() {
        this.props.getUsers();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
            let path = this.props.location.pathname;

            this.setState({
                editedId: 0
            });

            if (path === '/dashboard/user/add') {
                this.props.getUsers();
            }

            if (path.indexOf('/dashboard/user/edit/') !== -1) {
                let id = path.replace('/dashboard/user/edit/','');
                this.setState({
                    editedId: parseInt(id)
                })
            }
        }
    }


    componentDidUpdate(prevProps){

        let path = prevProps.location.pathname;
        if (path === '/dashboard/user/add') {
            this.setState({
                editedId: 0
            }, () => this.props.getUsers() )
        }
        if (path.indexOf('/dashboard/user/edit/') !== -1) {
            let id = path.replace('/dashboard/user/edit/','');
            console.log('id...',id);
            this.setState({
                editedId: parseInt(id)
            })
        }
    }

	render() {
        const { level } = this.props.user;

        if (level !== 'admin') {
            return <Redirect to='/' />
        }

        return (
            <main className='content'>

                <Title big='ADMIN PANEL' small='do somethings'/>

                <hr className='line'/>

                <Switch>
                    <Route exact path='/dashboard' render={(props) => <UsersList editedId={this.state.editedId} {...props} />} />
                    <Route exact path='/dashboard/user/add' component={UserAdd}/>
                    <Route path='/dashboard/user/edit/:id' component={UserEdit}/>
                </Switch>
            </main>
        )
	}
}

const mapStateToProps = state => ({
    user: state.auth.user
});

export default connect(mapStateToProps, {getUsers})(AdminPanel);

