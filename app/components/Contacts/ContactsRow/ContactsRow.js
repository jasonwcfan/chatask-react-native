import React, { Component, PropTypes } from 'react';
import Meteor from 'react-native-meteor';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import GiftedAvatar from 'react-native-gifted-chat/src/GiftedAvatar';

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



class ContactsRow extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={() => {this.props.onTouch(this.props.contact)}}>
                <GiftedAvatar user={{name: this.props.contact.profile.name}}/>
                <Text style={styles.text}>
                    {this.props.contact.profile.name}
                </Text>
            </TouchableOpacity>
        )
    }
}

ContactsRow.defaultProps = {
    onTouch: function(contact) {
        return Actions.contacts_tab_detail(contact);
    }
};

ContactsRow.propTypes = {
    contact: PropTypes.object,
    onTouch: PropTypes.func
};

export default ContactsRow;