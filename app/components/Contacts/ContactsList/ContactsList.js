import React, { Component, PropTypes } from 'react';
import {StyleSheet, Text, View, ListView} from "react-native";
import { MeteorListView } from 'react-native-meteor';
import Meteor from 'react-native-meteor';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import ContactsRow from '../ContactsRow';
import Searchbar from '../../Searchbar/Searchbar';
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

class ContactsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selector: this.props.chat? {_id: {$in: props.chat.participants}} : {'friends': {$in: [Meteor.userId()]}}
        };
    }

    render() {
        if (!this.props.contactsReady) {
            return <Loading />
        }
        return (
            <View style={[styles.container, this.props.sceneStyle ]}>
                <MeteorListView
                    collection="users"
                    selector={this.state.selector}
                    renderRow={(contact) => <ContactsRow contact={contact} onTouch={this.props.onTouch}/>}
                    renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                    renderHeader={() => <Searchbar />}
                    enableEmptySections
                />
            </View>
        );
    }
};

ContactsList.propTypes = {
    name: PropTypes.string,
    sceneStyle: View.propTypes.style,
    title: PropTypes.string,
    contactsReady: PropTypes.bool,
    onTouch: PropTypes.func,
    selector: PropTypes.object
};

export default ContactsList;
