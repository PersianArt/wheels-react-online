import React, { Component } from 'react';

import { required, email } from './index';

class ReviewForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {}
        };
        this.formData = {
            star : [required],
            comment : [required]
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
        console.log('name...',name,value,error);
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
                <label>Your Rating</label>
                <div className={`rate-star-wrapper clearfix ${formErrors && formErrors.star ? 'mb0' : ''}`}>
                    <input type='radio' id='star1' name='star' ref='star' className='goout' value='1' checked={formData.star === '1'} onChange={(e) => this.handleChange(e.target)} />
                    <label htmlFor='star1' className='rate-star'>
                        <span className='icon-star2' />
                    </label>
                    <input type='radio' id='star2' name='star' ref='star' className='goout' value='2' checked={formData.star === '2'} onChange={(e) => this.handleChange(e.target)} />
                    <label htmlFor='star2' className='rate-star'>
                        <span className='icon-star2' />
                        <span className='icon-star2' />
                    </label>
                    <input type='radio' id='star3' name='star' ref='star' className='goout' value='3' checked={formData.star === '3'} onChange={(e) => this.handleChange(e.target)} />
                    <label htmlFor='star3' className='rate-star'>
                        <span className='icon-star2' />
                        <span className='icon-star2' />
                        <span className='icon-star2' />
                    </label>
                    <input type='radio' id='star4' name='star' ref='star' className='goout' value='4' checked={formData.star === '4'} onChange={(e) => this.handleChange(e.target)} />
                    <label htmlFor='star4' className='rate-star'>
                        <span className='icon-star2' />
                        <span className='icon-star2' />
                        <span className='icon-star2' />
                        <span className='icon-star2' />
                    </label>
                    <input type='radio' id='star5' name='star' ref='star' className='goout' value='5' checked={formData.star === '5'} onChange={(e) => this.handleChange(e.target)} />
                    <label htmlFor='star5' className='rate-star'>
                        <span className='icon-star2' />
                        <span className='icon-star2' />
                        <span className='icon-star2' />
                        <span className='icon-star2' />
                        <span className='icon-star2' />
                    </label>
                </div>
                {formErrors && formErrors.star && <span className='form-error skin-color'>{formErrors && formErrors.star}</span>}
                <label htmlFor='comment'>Your Comment</label>
                <div className='textarea-wrapper'>
                    <textarea name='comment' ref='comment' onBlur={(e) => this.handleChange(e.target)} onChange={(e) => this.handleChange(e.target)} />
                    <div className='succes-message'><h2 className='title'>Your comment is saved</h2></div>
                </div>
                {formErrors && formErrors.comment && <span className='form-error skin-color'>{formErrors && formErrors.comment}</span>}
                <input type='submit' name='submit' value='Submit' />
            </form>
        )
    }
}

export default ReviewForm;