import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class Signin extends Component {
    handleFormSubmit({email, password}) {
        this.props.actions.signinUser({email, password});
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <Field name="email" component="input" type="text" placeholder="Email" className="form-control"/>
                </fieldset>
                <fieldset className="form-group">
                    <label>Password:</label>
                    <Field name="password" component="input" type="text" placeholder="Password" className="form-control"/>
                </fieldset>
                <button action="submit" className="btn btn-primary">Sign in</button>
            </form>
        )
    }
}

const SigninForm = reduxForm({
    form: 'signin',
    fields: ['email', 'password']
})(Signin);

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(SigninForm);