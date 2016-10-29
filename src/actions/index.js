import axios from 'axios';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({email, password}) {
    return function(dispatch, getState) {
        // Submit data to the server
        axios.post(`${ROOT_URL}/signin`, {email, password});

        // If success - update state; save jwt; redirect to /feature

        // If error - show an error

    };
}