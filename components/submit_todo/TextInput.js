import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native';

const InputNewTodo = ({ todoContent, setTodoContent }) => {
    return (
        <TextInput value={todoContent}
                    style={styles.todoInput} 
                    onChangeText={text => setTodoContent(text)} />
    );
};

const styles = StyleSheet.create({
    todoInput: {
        width: '95%',
        minHeight: 30,
        backgroundColor: '#fff',
        marginTop: '5%',
        marginBottom: '5%',
        padding: 10,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#478ecc',
    },
    inputContainer: {
        flex: 1,
        width: '90%',
        marginTop: 20,
        marginBottom: '10%',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default InputNewTodo;