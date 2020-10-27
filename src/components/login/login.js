import React from 'react';
import { CognitoUserPool } from 'amazon-cognito-identity-js';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { emailSignUp: '', passwordSignUp: '', emailLogIn: '', passwordLogIn: '' }
        const poolData = {
            UserPoolId: "us-east-1_9dcw5vKJ8",
            ClientId: "2vpgmojpcg4v86ajandfdi29m4"
        }

        const userPool = new CognitoUserPool(poolData);
        
        this.handleChangeEmailSignUp = this.handleChangeEmailSignUp.bind(this);
        this.handleChangePasswordSignUp = this.handleChangePasswordSignUp.bind(this);

        this.handleChangeEmailLogIn = this.handleChangeEmailSignUp.bind(this);
        this.handleChangePasswordLogIn = this.handleChangePasswordSignUp.bind(this);
    }

    handleChangeEmailSignUp(event) {
        this.setState({ emailSignUp: event.target.value });
    }

    handleChangePasswordSignUp(event) {
        this.setState({ passwordSignUp: event.target.value });
    }

    handleChangeEmailLogIn(event) {
        this.setState({ emailLogIn: event.target.value });
    }

    handleChangePasswordLogIn(event) {
        this.setState({ passwordLogIn: event.target.value });
    }

    render() {
        return (
            <div>
                <form>
                <h4>Sign up</h4>
                <input type='text' value={this.state.emailSignUp} onChange={this.handleChangeEmailSignUp}/>
                <input type='password' value={this.state.passwordSignUp} onChange={this.handleChangePasswordSignUp}/>
                <button>Sign up</button>
                </form>
                <form>
                <h4>Log In</h4>
                <input type='text' value={this.state.emailLogIn} onChange={this.handleChangeEmailLogIn}/>
                <input type='password' value={this.state.passwordLogIn} onChange={this.handleChangePasswordLogIn}/>
                <button>Log In</button>
                </form>
            </div>
        );
    }
}


export default Login;
