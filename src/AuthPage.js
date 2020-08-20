import React, { Component } from 'react'
import { signUp, signIn } from './todos-api.js';

export default class AuthPage extends Component {
    state = {
        signInEmail: '',
        signInPassword: '',
        signUpEmail: '',
        signUpPassword: ''
    }

    handleSignUp = async (e) => {
        e.preventDefault();

        const user = await signUp({
            email: this.state.signUpEmail,
            password: this.state.signUpPassword
        });

        this.props.handleToken(user.body.token);
        this.props.history.push('/todos');
    }

    handleSignIn = async (e) => {
        e.preventDefault();

        const user = await signIn({
            email: this.state.signInEmail,
            password: this.state.signInPassword
        });

        this.props.handleToken(user.body.token);
        this.props.history.push('/todos');
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSignIn}>
                    Sign-In <br/>
                    <label>
                        Email
                        <input onChange={e => this.setState({ signInEmail: e.target.value })} value={this.state.signInEmail}/>
                    </label><br/>
                    <label>
                        Password
                        <input onChange={e => this.setState({ signInPassword: e.target.value })} value={this.state.signInPassword}/>
                    </label><br/>
                    <button>Submit</button>
                </form>
                <form onSubmit={this.handleSignUp}>
                    Sign-Up <br/>
                    <label>
                        Email
                        <input onChange={e => this.setState({ signUpEmail: e.target.value })} value={this.state.signUpEmail}/>
                    </label><br/>
                    <label>
                        Password
                        <input onChange={e => this.setState({ signUpPassword: e.target.value })} value={this.state.signUpPassword}/>
                    </label><br/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

