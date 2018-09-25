import React, { Component } from 'react';

import { required, email } from './index';

class UserForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {}
        };
        this.formData = {
            username : [required],
            firstname : [required],
            lastname : [required],
            email : [required, email],
            active : [required],
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.defaultValue !== this.props.defaultValue) {
            this.setState({
                formData: nextProps.defaultValue
            })
        }
        this.props.reset && this.handleReset();
    }

    validate = (name, value, validate) => {
        let error = undefined;
        for (let i in validate) {
            if ( validate[i](value) !== undefined ) {
                error = validate[i](value);
            }
        }
        console.log('name...',name,error);
        return error;
    };

    handleChange = (target, submit = false) => {
        let value = target.type === 'checkbox' ? target.checked : target.value;
        if (submit) value = this.state.formData[target.name];
        const name = target.name;
        const validate = this.validate(name, value, this.formData[name]);

        this.setState({
            formData: {
                ...this.state.formData,
                [name]: value
            },
            formErrors: {
                ...this.state.formErrors,
                [name]: validate
            }
        });

        return validate;
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let formData = Object.keys(this.formData);
        let formErrors = {};
        console.log('formData',formData);

        formData.map( item => {
            formErrors[item] = this.handleChange(this.refs[item], true)
        });
        console.log('formErrors',formErrors);

        this.setState({
            formErrors: formErrors
        });

        const validation = formData.every(
            (item) => formErrors[item] === undefined
        );

        if (!validation) return;

        this.props.sendData(this.state.formData);
    };

    handleReset = () => {
        this.setState({
            formData: {}
        });
        this.refs['form'].reset();
    };

    render() {
        const { formErrors, formData } = this.state;

        return (
            <form className='edit-user-form' ref='form' onSubmit={this.handleSubmit}>
                <div className='row'>
                    <div className='col-md-4 col-md-offset-4'>
                        <label htmlFor='username'>Username:</label>
                        <input type='text' name='username' ref='username' value={formData.username || ''} className={formErrors && formErrors.username ? 'mb0' : ''} onBlur={(e) => this.handleChange(e.target)} onChange={(e) => this.handleChange(e.target)} />
                        {formErrors && formErrors.username && <span className='form-error skin-color'>{formErrors && formErrors.username}</span>}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4 col-md-offset-4'>
                        <label htmlFor='firstname'>First Name:</label>
                        <input type='text' name='firstname' ref='firstname' value={formData.firstname || ''} className={formErrors && formErrors.firstname ? 'mb0' : ''} onBlur={(e) => this.handleChange(e.target)} onChange={(e) => this.handleChange(e.target)} />
                        {formErrors && formErrors.firstname && <span className='form-error skin-color'>{formErrors && formErrors.firstname}</span>}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4 col-md-offset-4'>
                        <label htmlFor='lastname'>Last Name:</label>
                        <input type='text' name='lastname' ref='lastname' value={formData.lastname || ''} className={formErrors && formErrors.lastname ? 'mb0' : ''} onBlur={(e) => this.handleChange(e.target)} onChange={(e) => this.handleChange(e.target)} />
                        {formErrors && formErrors.lastname && <span className='form-error skin-color'>{formErrors && formErrors.lastname}</span>}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4 col-md-offset-4'>
                        <label htmlFor='email'>Email:</label>
                        <input type='text' name='email' ref='email' value={formData.email || ''} className={formErrors && formErrors.email ? 'mb0' : ''} onBlur={(e) => this.handleChange(e.target)} onChange={(e) => this.handleChange(e.target)} />
                        {formErrors && formErrors.email && <span className='form-error skin-color'>{formErrors && formErrors.email}</span>}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4 col-md-offset-4'>
                        <label htmlFor='email'>Active:</label>
                        <select name='active' ref='active' value={formData.active} className={formErrors && formErrors.active ? 'mb0' : ''} onBlur={(e) => this.handleChange(e.target)} onChange={(e) => this.handleChange(e.target)}>
                            <option value=''>Select active status</option>
                            <option value={0}>inactive</option>
                            <option value={1}>active</option>
                        </select>
                        {formErrors && formErrors.active && <span className='form-error skin-color'>{formErrors && formErrors.active}</span>}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-2 col-md-offset-4'>
                        <input type='submit' name='submit' value='Submit' />
                    </div>
                </div>
            </form>
        )
    }
}

export default UserForm;