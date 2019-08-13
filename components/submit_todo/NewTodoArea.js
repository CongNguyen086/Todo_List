import React from 'react'
import { View, StyleSheet } from 'react-native';
import InputNewTodo from './TextInput';
import SubmitButton from './SubmitButton';

const NewTodoArea = ({ todoContent, setTodoContent, onSubmitNewTodo }) => {
    return (
        <View style={styles.inputContainer}>
            <InputNewTodo todoContent={todoContent} setTodoContent={setTodoContent} />
            <SubmitButton onSubmitTodo={onSubmitNewTodo} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        marginTop: 20,
        marginBottom: '5%',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default NewTodoArea;