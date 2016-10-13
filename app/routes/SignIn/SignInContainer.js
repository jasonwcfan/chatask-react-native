import React, { Component } from 'react';
import { LayoutAnimation } from 'react-native';
import Meteor, { Accounts } from 'react-native-meteor';
import SignIn from './SignIn';

class SignInContainer extends Component {
    constructor(props) {
        super(props);

        this.mounted = false;
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            creatingNewAccount: false,
            error: null,
        };
    }

    componentWillMount() {
        this.mounted = true;
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    handleError(error) {
        this.mounted && this.setState({ error });
    }

    validInput(overrideConfirm) {
        const { name, email, password, confirmPassword, creatingNewAccount } = this.state;
        let valid = true;

        if (email.length === 0 || password.length === 0) {
            this.handleError('Email and password cannot be empty.');
            valid = false;
        }

        if (!overrideConfirm && creatingNewAccount && password !== confirmPassword) {
            this.handleError('Passwords do not match.');
            valid = false;
        }

        if (name.length === 0 && creatingNewAccount === true) {
            this.handleError('Name cannot be empty');
            valid = false;
        }

        if (valid) {
            this.handleError(null);
        }

        return valid;
    }

    handleSignIn() {
        const { creatingNewAccount } = this.state;

        if (creatingNewAccount) {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
            this.setState({ creatingNewAccount: false });
        } else if (this.validInput(true)) {
            const { email, password } = this.state;
            Meteor.loginWithPassword(email, password, (err) => {
                if (err) {
                    this.handleError(err.reason);
                }
            });
        }
    }

    handleCreateAccount() {
        const { name, email, password, creatingNewAccount } = this.state;

        if (creatingNewAccount && this.validInput()) {
            Accounts.createUser({ email, password, profile: { name }}, (err) => {
                if (err) {
                    this.handleError(err.reason);
                } else {
                    // hack because react-native-meteor doesn't login right away after sign in
                    Meteor.loginWithPassword(email, password, (err) => {
                        if (err) {
                            this.handleError(err.reason);
                        }
                    });
                }
            });
        } else {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
            this.setState({ creatingNewAccount: true });
        }
    }

    render() {
        return (
            <SignIn
                updateState={this.setState.bind(this)}
                signIn={this.handleSignIn.bind(this)}
                createAccount={this.handleCreateAccount.bind(this)}
                {...this.state}
            />
        );
    }
}

export default SignInContainer;
