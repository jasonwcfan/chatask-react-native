import React from 'react';
import {PropTypes} from "react";
import {StyleSheet, Text, View} from "react-native";
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

const propTypes = {
    name: PropTypes.string,
    sceneStyle: View.propTypes.style,
    title: PropTypes.string,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        // borderWidth: 2,
        // borderColor: 'red',
    },
});

const TabView = (props) => {
    return (
        <View style={[styles.container, props.sceneStyle ]}>
            <Text>Tab {props.title}</Text>
        </View>
    );
};

TabView.propTypes = propTypes;

export default TabView;
