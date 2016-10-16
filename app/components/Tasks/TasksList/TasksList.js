import React, { Component, PropTypes } from 'react';
import {StyleSheet, Text, View, ListView} from "react-native";
import { MeteorListView } from 'react-native-meteor';
import Meteor from 'react-native-meteor';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import TasksRow from '../TasksRow';
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

class TasksList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.tasksReady) {
            return <Loading />
        }
        return (
            <View style={[styles.container, this.props.sceneStyle ]}>
                <MeteorListView
                    collection="tasks"
                    selector={{'assignedTo._id': Meteor.userId()}}
                    renderRow={(task) => <TasksRow task={task} onTouch={this.props.onTouch}/>}
                    renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                    renderHeader={() => <Searchbar />}
                    enableEmptySections
                />
            </View>
        );
    }
};

TasksList.propTypes = {
    name: PropTypes.string,
    sceneStyle: View.propTypes.style,
    title: PropTypes.string,
    tasksReady: PropTypes.bool,
    onTouch: PropTypes.func,
};

export default TasksList;
