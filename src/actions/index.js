import axios from 'axios';
import {browserHistory} from 'react-router';
import {
    AUTH_USER,
    AUTH_ERROR
} from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({email, password}) {
    return function(dispatch, getState) {
        // Submit data to the server
        axios.post(`${ROOT_URL}/signin`, {email, password})
            .then(response => {
                // If success - update state; save jwt; redirect to /feature
                dispatch({type: AUTH_USER});
                localStorage.setItem('token', response.data.token);
                browserHistory.push('/feature');
            })
            .catch(() => {
                // If error - show an error
                dispatch(authError('Bad Login Info'));
            });

    };
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}