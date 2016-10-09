import React, { Component, PropTypes } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';
import ContactsList from './ContactsList';

export default createContainer((props) => {
    const contactsHandle = Meteor.subscribe('users');
    return {
        name: props.name,
        sceneStyle: props.sceneStyle,
        title: props.title,
        contactsReady: contactsHandle.ready(),
        contacts: Meteor.collection('users').find({}),
    };
}, ContactsList);