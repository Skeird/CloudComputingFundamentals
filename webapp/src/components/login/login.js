import React from 'react';
import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: "us-east-1_Hrv7sUiQF",
    ClientId: "33oso0rcdem6g5grim17j0u7av"
}

const userPool = new CognitoUserPool(poolData);

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { emailSignUp: '', passwordSignUp: '', emailLogIn: '', passwordLogIn: '' }
        
        this.handleChangeEmailSignUp = this.handleChangeEmailSignUp.bind(this);
        this.handleChangePasswordSignUp = this.handleChangePasswordSignUp.bind(this);

        this.handleChangeEmailLogIn = this.handleChangeEmailLogIn.bind(this);
        this.handleChangePasswordLogIn = this.handleChangePasswordLogIn.bind(this);

        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
        this.GoToHome = this.GoToHome.bind(this);
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

    register(event) {
        console.log(this.state.nameSignUp);
        userPool.signUp(this.state.emailSignUp, this.state.passwordSignUp, [], null, (err, data) => {
            if (err) {
                console.error(err);
                alert(err.message);
            } else {
                console.log(data);
                alert('Account created ! check your email to validate your account, then come back and login.');
            }
        })
        event.preventDefault();
    }

    GoToHome(result) {
        console.log('access token + ' + result.getAccessToken().getJwtToken());
        localStorage.setItem('cloudLearningAccessToken', result.getAccessToken().getJwtToken());
        this.props.history.push('/home');
    }

    login(event) {
        event.preventDefault();
        var authInput = {
            Username : this.state.emailLogIn,
            Password : this.state.passwordLogIn 
        }
        var userData = {
            Username: this.state.emailLogIn,
            Pool: userPool
        }
        var authDetails = new AuthenticationDetails(authInput);
        var user = new CognitoUser(userData);
        user.authenticateUser(authDetails, {
            onSuccess: this.GoToHome,
        
            onFailure: function(err) {
                console.log(err);
                alert(err.message);
            }
        });
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.register}>
                    <h4>Sign up</h4>
                    <input type='text' value={this.state.emailSignUp} onChange={this.handleChangeEmailSignUp} />
                    <input type='password' value={this.state.passwordSignUp} onChange={this.handleChangePasswordSignUp} />
                    <button>Sign up</button>
                </form>
                <form onSubmit={this.login}>
                    <h4>Log In</h4>
                    <input type='text' value={this.state.emailLogIn} onChange={this.handleChangeEmailLogIn} />
                    <input type='password' value={this.state.passwordLogIn} onChange={this.handleChangePasswordLogIn} />
                    <button>Log In</button>
                </form>
            </div>
        );
    }
}


export default Login;
