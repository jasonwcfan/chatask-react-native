import React from 'react';
import Meteor from 'react-native-meteor';

const Chat = {
    createChat: function(name, participants) {
        Meteor.call('chats.insert', name, participants)
    }
};

export default Chat;