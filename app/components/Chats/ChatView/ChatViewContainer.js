import React, { Component, PropTypes } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';
import ChatView from './ChatView';

export default ChatViewContainer = createContainer((props) => {
    const messagesHandle = Meteor.subscribe('messages');
    const messages = Meteor.collection('messages').find({chatId: props.chat._id});
    // console.log(messages);
    // console.log(messagesHandle.ready());
    return {
        messagesReady: messagesHandle.ready(),
        messages: messages
    };
}, ChatView);