import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../actions';

const renderField = ({ input, label, type, placeholder, meta: { touched, error, warning } }) => (
    <fieldset className="form-group">
        <label>{label}</label>
        <div>
            <input {...input} placeholder={placeholder} className="form-control" type={type}/>
            {touched && ((error && <span className="error">{error}</span>) || (warning && <span className="error">{warning}</span>))}
        </div>
    </fieldset>
);

class Signup extends Component {
    render() {console.log(this.props);
        const {handleSubmit, error} = this.props;
        return (
            <form onSubmit={handleSubmit(()=>{}/*this.handleFormSubmit.bind(this)*/)}>
                <Field name="email" type="text" placeholder="Email" label="Email" className="form-control" component={renderField}/>
                <Field name="password" type="password" placeholder="Password" label="Password" className="form-control" component={renderField}/>
                <Field name="passwordConfirm" type="password" placeholder="Confirm Password" label="Confirm Password:" className="form-control" component={renderField}/>
                <button action="submit" className="btn btn-primary">Sign up!</button>
            </form>
        );
    }
}

function validate(formProps) {
    const errors = {};

    if (!formProps.email) {
        errors.email = 'Please enter an email';
    }

    if (!formProps.password) {
        errors.password = 'Please enter a password';
    }

    if (!formProps.passwordConfirm) {
        errors.passwordConfirm = 'Please enter a password confirmation';
    }

    if (formProps.password !== formProps.passwordConfirm) {
        errors.password = 'Passwords must match';
    }

    return errors;
}

const SignupForm = reduxForm({
    form: 'signup',
    fields: ['email', 'passowrd', 'passwordConfirm'],
    validate
})(Signup);

export default connect()(SignupForm);