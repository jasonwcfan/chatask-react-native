import React, { Component, PropTypes } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';
import TasksList from './TasksList';


export default createContainer((props) => {
    const tasksHandle = Meteor.subscribe('tasks');
    return {
        name: props.name,
        sceneStyle: props.sceneStyle,
        title: props.title,
        tasksReady: tasksHandle.ready(),
    };
}, TasksList);