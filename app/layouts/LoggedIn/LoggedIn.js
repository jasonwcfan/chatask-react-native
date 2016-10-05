import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst } from 'react-native-router-flux'
import Routes from '../../config/routes';
import images from '../../config/images';
import styles from './styles';
import { ContactsView, TasksView, SettingsView, TabIcon } from '../../components/Navigation';
import ChatsListContainer from '../../components/Chats/ChatsList';
import ChatViewContainer from '../../components/Chats/ChatView';

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
                        title="Chats"
                        icon={TabIcon}
                        // navigationBarStyle={{ backgroundColor: 'red' }}
                        titleStyle={{ color: 'white' }} >
                        <Scene
                            key="chats_tab_master"
                            component={ChatsListContainer}
                            title="Chats"
                            onRight={() => alert('Right button')}
                            rightTitle="Right"
                        />
                        <Scene
                            key="chats_tab_detail"
                            component={ChatViewContainer}
                            title="Chat Name Placeholder"
                            titleStyle={{ color: 'black' }}
                        />
                    </Scene>
                    <Scene
                        key="contacts_tab"
                        initial
                        title="Contacts"
                        icon={TabIcon} >
                        <Scene
                            key="contacts_tab_master"
                            component={ContactsView}
                            title="Contacts"
                            renderRightButton={() => <Text>Right</Text>}
                        />
                        <Scene
                            key="contacts_tab_detail"
                            component={ContactsView}
                            title="Contact Name Placeholder"
                            hideBackImage
                            onBack={() => alert('Left button!')}
                            backTitle="Left"
                            duration={1}
                            panHandlers={null}
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
