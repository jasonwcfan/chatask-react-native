import React, { Component, PropTypes } from 'react';
import {StyleSheet, Text, View, ListView, TextInput, TouchableOpacity, Alert} from "react-native";
import { Actions } from 'react-native-router-flux';
import { Users } from '../../../lib/collections';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textbox: {
        flex: 1,
    },

    textinput: {
        height: 30,
        paddingHorizontal: 8,
        fontSize: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#d6d7da'
    },

    button: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'transparent',
        margin: 5,
        borderRadius: 10,
        borderWidth: 0.5,
    },

    buttonText: {
        fontSize: 16,
        fontWeight: '500',
    }
});

class ContactsAddFriend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null
        };
    }

    _handleButtonPress(state) {
        Alert.alert(Users.addFriend(state.email));
    }

    render() {
        return (
            <View style={[styles.container, this.props.sceneStyle ]}>
                <View style={styles.textbox}>
                    <TextInput
                        style={styles.textinput}
                        placeholder="Search by email..."
                        value={this.state.email}
                        onChangeText={(email) => this.setState({email})}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={() => this._handleButtonPress(this.state)}>
                    <Text>Add Friend</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

ContactsAddFriend.propTypes = {

};

export default ContactsAddFriend