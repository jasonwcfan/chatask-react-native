import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 8,
        alignItems: 'center',
        backgroundColor: '#C1C1C1',
    },
    input: {
        height: 30,
        flex: 1,
        paddingHorizontal: 8,
        fontSize: 15,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
    },
});

class Searchbar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Search..."
                    onChangeText={(text) => console.log('searching for ', text)}
                />
            </View>
        )
    }

};

export default Searchbar;