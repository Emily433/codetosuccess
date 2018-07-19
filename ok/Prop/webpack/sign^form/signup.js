import React, { Component } from 'react';

import SignupForm from './signupForm';
import { connect } from 'react-redux';
import * as actions from '../../actions';

export default connect(null, actions)(Signup)
class Signup extends Component {
    render() {
        return (
            <div className='sign-up'>
                <SignupForm/>
            </div>
        )
    }
}
onSubmit = (fields) => {
    this.props.signUp(fields, () => {
        console.log('navigate to dashboard');
        this.props.history.push('/dashboard');
    })
}

render() 
    return (
        <div className='sign-up'>
            <SignupForm onSubmit={() => this.onSubmit()}/>
        </div>
        
    )



export default Signup;