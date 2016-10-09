import React from 'react';
import Meteor from 'react-native-meteor';

const Messages = {
    createMessage(message, chat) {
        Meteor.call('messages.insert', message, chat, Meteor.user());
    }
};

export default Messages;