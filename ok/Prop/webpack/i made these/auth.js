import axios from 'axios';

import { ROOT_URL } from '../config';

import {
    STORE_USER
} from './types';


export function signUp(fields, success) {
    console.log(fields);
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signUp`, fields)
            .then(response => {
                //do something with response
            })
            .catch(err => {
                if(err) { console.log(err) }
            })
    }
}
export function signUp(fields, success) {
    console.log(fields);

    return function(dispatch) {
        axios.post(`${ROOT_URL}/signUp`, fields)
        .then(response => {
            const { token } = response.data;
            localStorage.setItem('token', token);
            localStorage.getItem('token');
            dispatch({
                type: STORE_USER,
                payload: response.data
            })
            success()
        })
        .catch(err => {
            if(err) { console.log(err) }
        })
    }
}