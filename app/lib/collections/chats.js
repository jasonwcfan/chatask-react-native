import React from 'react';
import Meteor from 'react-native-meteor';

const Chat = {
    createChat: function(name, participants) {
        Meteor.call('chats.insert', name, participants);
    },
    
    inviteContactToConversation: function(chat, contact) {
        Meteor.call('chats.addUser', chat, contact);
    }
};

export default Chat;