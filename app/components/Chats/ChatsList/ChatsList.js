import React, { Component, PropTypes } from 'react';
import Meteor from 'react-native-meteor';
import {StyleSheet, Text, View, ListView} from "react-native";
import { MeteorListView } from 'react-native-meteor';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import ChatsRow from '../ChatsRow';
import ChatsSearch from '../ChatsSearch'
import Loading from '../../Loading'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        // borderWidth: 2,
        // borderColor: 'red',
    },

    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
    },
});

class ChatsList extends Component {
    constructor(props) {
        super(props);
        console.log(props.chats);
    }

    render() {
        if (!this.props.chatsReady) {
            return <Loading />
        }
        return (
            <View style={[styles.container, this.props.sceneStyle ]}>
                <MeteorListView
                    collection="chats"
                    selector={{'participants._id': Meteor.user()._id}}
                    renderRow={(chat) => <ChatsRow chat={chat} />}
                    renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                    renderHeader={() => <ChatsSearch />}
                />
            </View>
        );
    }
};

ChatsList.propTypes = {
    name: PropTypes.string,
    sceneStyle: View.propTypes.style,
    title: PropTypes.string,
    chatsReady: PropTypes.bool,
    chats: PropTypes.array,
};

export default ChatsList;
