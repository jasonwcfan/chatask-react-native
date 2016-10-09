import React, { Component, PropTypes } from 'react';
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



class ContactsRow extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={() => this.props.touchAction()}>
                <Text style={styles.text}>
                    {this.props.contact.profile.name}
                </Text>
            </TouchableOpacity>
        )
    }
}

ContactsRow.defaultProps = {
    touchAction: function() {
        return Actions.contacts_tab_detail(this.props);
    }
}

ContactsRow.propTypes = {
    contact: PropTypes.object,
    touchAction: PropTypes.func
};

export default ContactsRow;