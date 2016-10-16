import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Swipeout from 'react-native-swipeout';
import { Tasks } from '../../../lib/collections';

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



class TasksRow extends Component {
    _showTask() {
        return Actions.tasks_tab_detail(this.props);
    }

    render() {
        const deleteButton = {text: 'Delete', backgroundColor: '#db1a1a', onPress: () => {
            Tasks.deleteChat(this.props.task);
        }};
        return (
            <Swipeout right={[deleteButton]} backgroundColor='transparent' autoClose={true}>
                <TouchableOpacity onPress={() => this._showTask()} style={styles.container}>
                    <Text style={styles.text}> {this.props.task.title} </Text>
                </TouchableOpacity>
            </Swipeout>
        )
    }
}

TasksRow.propTypes = {
    task: PropTypes.object
};

export default TasksRow;