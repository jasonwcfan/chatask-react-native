import React, { Component, PropTypes } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';
import ChatView from './ChatView';

export default ChatViewContainer = createContainer((props) => {
    const messagesHandle = Meteor.subscribe('chats');
    console.log(Meteor.collection('chats').find({}));
    return {
        name: props.name,
        sceneStyle: props.sceneStyle,
        title: props.title,
        chatsReady: chatsHandle.ready(),
        chats: Meteor.collection('chats').find({}),
    };
}, ChatView);