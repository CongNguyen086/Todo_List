import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';

const statusStyle = todo => {
    if(todo.status === 'Done') {
        return {
            backgroundColor: Colors.itemDoneBackground,
            textDecorationLine: 'line-through',
        }
    } else {
        return {
            backgroundColor: Colors.itemDefaultBackground,
            textDecorationLine: 'none',
        }
    }
};

const TodoItem = ({ todo, index, onToggleTodo, onDeleteTodo, onLongPress }) => {
    return (
        <TouchableOpacity
            key={todo.body}
            style={[styles.todoItem, statusStyle(todo)]}
            onPress={() => onToggleTodo(todo.id)}
            onLongPress={() => onLongPress(todo,onDeleteTodo)}
        >
            <Text style={[styles.todoText, statusStyle(todo)]}>
                {index + 1}. {todo.body}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    todoItem: {
        margin: 5,
        padding: 10,
        width: 300,
        minHeight: 20,
        color: 'white',
        borderRadius: 5,
        flexWrap: 'wrap'
    },
    todoText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    }
});

export default TodoItem;