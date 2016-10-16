import React, { Component } from 'react';
import Meteor from 'react-native-meteor';
import { Image, StyleSheet, Text, View, Alert } from 'react-native';
import { Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst } from 'react-native-router-flux'
import Routes from '../../config/routes';
import images from '../../config/images';
import styles from './styles';
import { ContactsView, SettingsView, TabIcon } from '../../components/Navigation';
import ChatsList from '../../components/Chats/ChatsList';
import ChatView from '../../components/Chats/ChatView';
import ContactsList from '../../components/Contacts/ContactsList';
import ContactsAddFriend from '../../components/Contacts/ContactsAddFriend';
import TasksList from '../../components/Tasks/TasksList';
import TasksView from '../../components/Tasks/TasksRow';
import NewTaskView from '../../components/Tasks/NewTaskView';
import { Chats } from '../../lib/collections';

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        return defaultReducer(state, action);
    };
};

const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
    const style = {
        flex: 1,
        backgroundColor: '#F5FCFF',
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,
    };
    if (computedProps.isActive) {
        style.marginTop = computedProps.hideNavBar ? 0 : 64;
        style.marginBottom = computedProps.hideTabBar ? 0 : 50;
    }
    return style;
};

// Specifies the navigation layout of the app
class LoggedIn extends Component {
    render() {
        return (
            <Router createReducer={reducerCreate} getSceneStyle={getSceneStyle}>
                <Scene
                    key="main"
                    tabs
                    tabBarStyle={styles.tabBarStyle}
                    tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle} >
                    <Scene
                        key="chats_tab"
                        initial
                        title="Chats"
                        icon={TabIcon} >
                        <Scene
                            key="chats_tab_master"
                            component={ChatsList}
                            title="Chats"
                            onRight={(props) => {Actions.chats_tab_invite({onTouch: (contact) => {
                                Chats.createChat(contact.profile.name, [Meteor.user(), contact]);
                                Actions.pop();
                            }})}}
                            onLeft={() => Meteor.logout()}
                            leftTitle="Logout"
                            rightTitle="New"
                        />
                        <Scene
                            key="chats_tab_detail"
                            component={ChatView}
                            getTitle={(props) => {return props.chat? props.chat.name : null}}
                            onRight={(props) => {Actions.chats_tab_participants({
                                chat: props.chat
                            })}}
                            rightTitle="Details"
                        />
                        <Scene
                            key="chats_tab_participants"
                            component={ContactsList}
                            title="Chat Participants"
                            onRight={(props) => {Actions.chats_tab_invite({onTouch: (contact) => {
                                Chats.inviteContactToConversation(props.chat, contact);
                                Alert.alert('Added to chat', null, () => Actions.pop({popNum: 2}) );
                            }})}}
                            rightTitle="Invite"
                        />
                        <Scene
                            key="chats_tab_invite"
                            component={ContactsList}
                            title="Invite to conversation"
                        />
                    </Scene>
                    <Scene
                        key="contacts_tab"
                        title="Contacts"
                        icon={TabIcon} >
                        <Scene
                            key="contacts_tab_master"
                            component={ContactsList}
                            title="Contacts"
                            onRight={(props) => Actions.contacts_tab_add_friend()}
                            rightTitle="Add"
                        />
                        <Scene
                            key="contacts_tab_detail"
                            component={ContactsView}
                            title="Contact Name Placeholder"
                        />
                        <Scene
                            key="contacts_tab_add_friend"
                            component={ContactsAddFriend}
                            title="Add Friend"
                        />
                    </Scene>
                    <Scene
                        key="tasks_tab"
                        title="Tasks"
                        icon={TabIcon} >
                        <Scene
                            key="tasks_tab_master"
                            component={TasksList}
                            title="Tasks"
                            onRight={(props) => Actions.task_tab_create()}
                            rightTitle="New"
                        />
                        <Scene
                            key="tasks_tab_detail"
                            component={TasksView}
                            title="Task Name Placeholder"
                        />
                        <Scene
                            key="task_tab_create"
                            component={NewTaskView}
                            title="Task Name Placeholder"
                        />
                    </Scene>
                    <Scene
                        key="settings_tab"
                        component={SettingsView}
                        title="Settings"
                        icon={TabIcon}
                    />
                </Scene>

            </Router>
        );
    }
}

export default LoggedIn;
