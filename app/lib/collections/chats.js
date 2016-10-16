import React from 'react';
import Meteor from 'react-native-meteor';

const Chats = {
    createChat: function(name, participants) {
        Meteor.call('chats.insert', name, participants);
    },
    
    deleteChat: function(chat) {
        Meteor.call('chats.remove', chat);
    },
    
    inviteContactToConversation: function(chat, contact) {
        Meteor.call('chats.addUser', chat, contact);
    }
};

export default Chats;