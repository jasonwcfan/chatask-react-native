import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        height: 30,
        flexDirection: 'row',
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

const ContactsSearch = (props) => (
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder="Search..."
            onChangeText={(text) => console.log('searching for ', text)}
        />
    </View>
);

export default ContactsSearch;