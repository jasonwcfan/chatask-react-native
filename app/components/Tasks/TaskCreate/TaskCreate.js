import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;

var TaskForm = t.struct({
    title: t.String,
    description: t.maybe(t.String),
    assignToSelf: t.Boolean,
    assignTo: t.Number,
});

var options = {
    fields: {
        title: {},
        description: {
            multiline: true,
        },
        assignToSelf: {},
        assignTo: {}
    }
};

class TaskCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: options,
            value: null
        };
    }

    _onChange(value) {
        const options = t.update(this.state.options, {
            fields: {
                title: {},
                description: {},
                assignToSelf: {},
                assignTo: {
                    editable: {'$set': !value.assignToSelf}
                }
            }
        });
        this.setState({options: options, value: value});
    }

    _onPress() {
        var value = this.refs.form.getValue();
        if (value) {
            console.log(value);
        }
    }

    render() {
        return(
            <View style={styles.container}>
                {/* display */}
                <Form
                    ref="form"
                    type={TaskForm}
                    options={this.state.options}
                    value={this.state.value}
                    onChange={this._onChange.bind(this)}
                />
                <TouchableHighlight style={styles.button} onPress={this._onPress.bind(this)} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
    },
    title: {
        fontSize: 30,
        alignSelf: 'center',
        marginBottom: 30
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
});


export default TaskCreate;