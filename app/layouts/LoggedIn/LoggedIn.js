import React, { Component } from 'react';
import Meteor from 'react-native-meteor';
import { Image, StyleSheet, Text, View, Alert } from 'react-native';
import { Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst } from 'react-native-router-flux'
import Routes from '../../config/routes';
import images from '../../config/images';
import styles from './styles';
import { ContactsView, TasksView, SettingsView, TabIcon } from '../../components/Navigation';
import ChatsList from '../../components/Chats/ChatsList';
import ChatView from '../../components/Chats/ChatView';
import ContactsList from '../../components/Contacts/ContactsList';
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
                        icon={TabIcon}
                        // navigationBarStyle={{ backgroundColor: 'red' }}
                        titleStyle={{ color: 'white' }} >
                        <Scene
                            key="chats_tab_master"
                            component={ChatsList}
                            title="Chats"
                            titleStyle={{ color: 'black' }}
                            onRight={(props) => {Actions.chats_tab_invite({onTouch: (contact) => {
                                Chats.createChat(contact.profile.name, [Meteor.user()]);
                                Actions.chats_tab_detail();
                            }})}}
                            rightTitle="New"
                        />
                        <Scene
                            key="chats_tab_detail"
                            component={ChatView}
                            title="Chat Name Placeholder"
                            titleStyle={{ color: 'black' }}
                            onRight={(props) => {Actions.chats_tab_invite({onTouch: (contact) => {
                                Chats.inviteContactToConversation(props.chat, contact);
                                Alert.alert('Added to chat', null, () => Actions.pop() );
                            }})}}
                            rightTitle="Invite"
                        />
                        <Scene
                            key="chats_tab_invite"
                            component={ContactsList}
                            titleStyle={{ color: 'black' }}
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
                        />
                        <Scene
                            key="contacts_tab_detail"
                            component={ContactsView}
                            title="Contact Name Placeholder"
                        />
                    </Scene>
                    <Scene
                        key="tasks_tab"
                        component={TasksView}
                        title="Tasks"
                        icon={TabIcon}
                    />
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
