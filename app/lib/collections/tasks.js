import React from 'react';
import Meteor from 'react-native-meteor';

const Tasks = {
    createChat: function(name, participants) {
        Meteor.call('tasks.insert', name, participants);
    },

    deleteChat: function(chat) {
        Meteor.call('tasks.remove', chat);
    },
    
};

export default Tasks;