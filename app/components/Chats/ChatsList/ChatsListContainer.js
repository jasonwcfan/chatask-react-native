import React, { Component, PropTypes } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';
import ChatsList from './ChatsList';


export default createContainer((props) => {
    const chatsHandle = Meteor.subscribe('chats');
    return {
        name: props.name,
        sceneStyle: props.sceneStyle,
        title: props.title,
        chatsReady: chatsHandle.ready(),
    };
}, ChatsList);