import React, { Component, PropTypes } from 'react';
import {StyleSheet, Text, View, ListView, TextInput, TouchableOpacity} from "react-native";
import { MeteorListView } from 'react-native-meteor';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import ContactsRow from '../ContactsRow';
import ContactsSearch from '../ContactsSearch'
import Loading from '../../Loading'

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
    }

    render() {
        return (
            <View style={[styles.container, this.props.sceneStyle ]}>
                <View style={styles.textbox}>
                    <TextInput style={styles.textinput} placeholder="Search by email..." />
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text>Add Friend</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

ContactsAddFriend.propTypes = {

};

export default ContactsAddFriend