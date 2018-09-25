import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logOut } from '../../redux/actions/authActions';

class TopBarLinks extends Component {
	
	render() {
		const { loggedIn, user } = this.props;

		if ( loggedIn ) {
			return (
				<ul className="top-nav">
					<li><Link to='/register'>Registration</Link></li>
					<li><Link to="/" onClick={this.props.logOut}>Log Out</Link></li>
					<li><Link to="/">Checkout</Link></li>
					{ user.level && user.level === 'user' && <li><Link to="/panel">My Account</Link></li> }
                    { user.level && user.level === 'admin' && <li><Link to="/dashboard">Admin Panel</Link></li> }
					<li className="skin-color">{user.firstname} {user.lastname}</li>
					<li><img src={`${window.env.PICTURE_LOCATION}/avatar/${user.avatar}`} className="avatar-bar" alt="" /></li>
				</ul>
			)
		} else {
			return (
				<ul className="top-nav">
					<li><Link to='/register'>Registration</Link></li>
					<li><Link to='/login' >Log In</Link></li>
				</ul>
			)
		}
	}
}

const mapStateToProps = state => ({
    loggedIn: state.auth.loggedIn,
	user: state.auth.user
});
					 
export default connect(mapStateToProps, {logOut})(TopBarLinks);

