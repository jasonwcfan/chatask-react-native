import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Swipeout from 'react-native-swipeout';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 12,
        fontSize: 16,
    },
    photo: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
});



class ChatsRow extends Component {
    showChat() {
        return Actions.chats_tab_detail(this.props);
    }

    render() {
        return (
            <Swipeout right={[{text: 'Delete', backgroundColor: '#db1a1a'}]} backgroundColor='transparent' >
                <TouchableOpacity onPress={() => this.showChat()} style={styles.container}>
                        <Text style={styles.text}> {this.props.chat.name} </Text>
                </TouchableOpacity>
            </Swipeout>
        )
    }
}

ChatsRow.propTypes = {
    chat: PropTypes.object
};

export default ChatsRow;