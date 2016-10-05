import React, { Component, PropTypes } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';
import ChatView from './ChatView';

export default ChatViewContainer = createContainer((props) => {
    console.log(props);
    const messagesHandle = Meteor.subscribe('messages');
    console.log(Meteor.collection('messages').find({}));
    return {
        name: props.name,
        sceneStyle: props.sceneStyle,
        title: props.title,
        chatsReady: messagesHandle.ready(),
        chats: Meteor.collection('chats').find({}),
    };
}, ChatView);