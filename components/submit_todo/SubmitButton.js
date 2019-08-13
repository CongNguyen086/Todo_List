import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const SubmitButton = ({ onSubmitTodo }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onSubmitTodo}>
            <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 50,
        width: '40%',
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#f0ef93',
        justifyContent: 'center',
        shadowRadius: 5,
        borderRadius: 10,
        shadowOpacity: 0.90,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: {
            height: 5,
            width: 5
        },
        elevation: 1.5,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 20,
    }
});

export default SubmitButton;
