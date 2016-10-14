import React, { Component, PropTypes } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';
import TasksList from './TasksList';


export default createContainer((props) => {
    const tasksHandle = Meteor.subscribe('chats');
    return {
        name: props.name,
        sceneStyle: props.sceneStyle,
        title: props.title,
        chatsReady: chatsHandle.ready(),
    };
}, ChatsList);