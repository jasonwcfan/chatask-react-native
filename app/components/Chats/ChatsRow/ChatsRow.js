import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

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
            <TouchableOpacity style={styles.container} onPress={() => this.showChat()}>
                <Text style={styles.text}>
                    {this.props.chat.name}
                </Text>
            </TouchableOpacity>
        )
    }
}

ChatsRow.propTypes = {
    chat: React.PropTypes.object
};

export default ChatsRow;