import React, { Component, PropTypes } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';
import ChatsList from './ChatsList';

// const ChatsListContainer = (props) => {
//     return (
//         <ChatsList
//             name={props.name}
//             sceneStyle={props.sceneStyle}
//             title={props.title}
//         />
//     );
// };

export default ChatsListContainer = createContainer((props) => {
    const chatsHandle = Meteor.subscribe('chats');
    return {
        name: props.name,
        sceneStyle: props.sceneStyle,
        title: props.title,
        chatsReady: chatsHandle.ready(),
        chats: Meteor.collection('chats').find({}),
    };
}, ChatsList);