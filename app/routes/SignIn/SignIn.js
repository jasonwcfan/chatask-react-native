import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Button from '../../components/Button';
import GenericTextInput, { InputWrapper } from '../../components/GenericTextInput';
import images from '../../config/images';
import styles from './styles';

const SignIn = (props) => {
    const { updateState, signIn, createAccount, error, creatingNewAccount } = props;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                style={styles.logo}
                source={images.logo}
                resizeMode="contain"
                />

                <Text style={styles.subHeaderText}>Secure Messenger</Text>
            </View>

            <InputWrapper>
                {creatingNewAccount ?
                    <GenericTextInput
                        placeholder="name"
                        onChangeText={(name) => updateState({ name })}
                        borderBottom
                    />
                    : null}
                <GenericTextInput
                    placeholder="email address"
                    onChangeText={(email) => updateState({ email })}
                />
                <GenericTextInput
                    placeholder="password"
                    onChangeText={(password) => updateState({ password })}
                    secureTextEntry
                    borderTop
                />
                {creatingNewAccount ?
                <GenericTextInput
                    placeholder="confirm password"
                    onChangeText={(confirmPassword) => updateState({ confirmPassword })}
                    secureTextEntry
                    borderTop
                />
                : null}
            </InputWrapper>

            <View style={styles.error}>
                <Text style={styles.errorText}>{error}</Text>
            </View>

            <View style={styles.buttons}>
                <Button text="Sign In" onPress={signIn} />
                <Button text="Create Account" onPress={createAccount} />
            </View>

            <KeyboardSpacer />
        </View>
        );
};

SignIn.propTypes = {
  updateState: React.PropTypes.func,
  signIn: React.PropTypes.func,
  createAccount: React.PropTypes.func,
  error: React.PropTypes.string,
  creatingNewAccount: React.PropTypes.bool,
};

export default SignIn;
