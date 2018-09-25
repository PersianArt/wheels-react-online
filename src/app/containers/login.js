import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { logIn } from '../../redux/actions/authActions';
import Title from '../components/title';
import LoginForm from '../components/forms/loginForm';

class Login extends Component {

    sendData = (data) => {
        console.log('data...', data);
        this.props.logIn(data);
    };
	
	render() {

		if ( this.props.loggedIn ) {
			return <Redirect to='/' />;
		}

        return (
            <main className='content'>

                <Title big='LOG IN' small='for more access' />

                <hr className='line' />

                <div className='container'>
                    <LoginForm sendData={(data) => this.sendData(data)}/>
                    <div className='row'>
                        <div className='col-md-8 col-md-offset-2'>
                            <div className='line-line-wrapper'>
                                <span className='line-line'>or forgot password</span>
                            </div>
                        </div>
                    </div>
                    <form className='forgot-form' >
                        <div className='row'>
                            <div className='col-md-4 col-md-offset-4'>
                                <label htmlFor='email'>Email:</label>
                                <input type='email' id='email' name='email' size='1' required='required' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2 col-md-offset-4'>
                                <input type='submit' name='forget-submit' value='Submit' />
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        )
	}
}

const mapStateToProps = state => ({
    loggedIn: state.auth.loggedIn
});

export default connect(mapStateToProps, {logIn})(Login);

