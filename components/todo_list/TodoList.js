import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({ onToggleTodo, onDeleteTodo, onLongPress, todoList }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo List ({todoList.length})</Text>
            <ScrollView>
                {todoList.map((todo, index) => {
                    return <TodoItem
                        key={todo.id}
                        todo={todo}
                        index={index}
                        onDeleteTodo={onDeleteTodo}
                        onLongPress={onLongPress}
                        onToggleTodo={onToggleTodo}
                    />;
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 5,
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 10,
        backgroundColor: 'rgba(240, 239, 147, 0.9)',
        // borderWidth: 2,
        borderRadius: 10,
    },
    title: {
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 30,
    },
});

export default TodoList;