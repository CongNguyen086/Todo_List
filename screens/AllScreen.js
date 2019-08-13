import React, { Component } from 'react';
import {
    Text, Alert, View, StyleSheet,
    ImageBackground, KeyboardAvoidingView, Animated
} from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import Colors from '../constants/Colors';
import HeaderTitle from '../components/HeaderTitle';
import TodoList from '../components/todo_list/TodoList';
import NewTodoArea from '../components/submit_todo/NewTodoArea';

import { TODOS } from '../utils/data.js';

var completeList = TODOS.filter(todo => todo.status === 'Done');
var activeList = TODOS.filter(todo => todo.status === 'Active');
export const currentCompleteList = completeList;
export const currentActiveList = activeList;

export class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: TODOS,
            todoContent: '',
            completeList: completeList,
            activeList: activeList,
        };
    };

    setTodoList = list => {
        this.setState({ todoList: list });
    };

    setTodoContent = text => {
        this.setState({ todoContent: text });
    };

    // Update todo list
    findTodo = (todoList, id) => {
        const todoItem = todoList.find(item => item.id === id);
        const foundIndex = todoList.findIndex(item => item.id === id);
        todoItem.status = todoItem.status === 'Done' ? 'Active' : 'Done';
        todoList[foundIndex] = todoItem;
        return [...todoList];
    };

    // Update complete & active lists
    updateOtherList = todo => {
        if (todo.status === 'Done') {
            const newCompleteList = [...this.state.completeList, todo];
            const newActiveList = TODOS.filter(todo => todo.status !== 'Done');
            this.setState({ completeList: newCompleteList, activeList: newActiveList });
        } else {
            const newActiveList = [...this.state.activeList, todo];
            const newCompleteList = TODOS.filter(todo => todo.status !== 'Active');
            this.setState({ completeList: newCompleteList, activeList: newActiveList });
        }
    };

    onToggleTodo = id => {
        // Update list 
        const newList = this.findTodo(this.state.todoList, id);
        // Update state
        this.setTodoList(newList);
        const todo = newList.find(item => item.id === id);
        // Update other lists
        this.updateOtherList(todo);
        // // Set other lists as props
        completeList = this.state.completeList;
        activeList = this.state.activeList;

        setTimeout(() => {
            this.props.navigation.navigate('SingleTodo', {
                updatedTodo: todo
            });
        }, 1000);
    };

    onDeleteTodo = id => {
        const newList = this.state.todoList.filter(todo => todo.id !== id);
        this.setTodoList(newList);
    };

    confirmDialog = (todo, onDeleteTodo) => {
        const prompt = `Task: ${todo.body}`;
        Alert.alert(
            prompt,
            'Delete your todo?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                {
                    text: 'OK',
                    onPress: () => onDeleteTodo(todo.id)
                }
            ],
            { cancelable: true }
        );
    };

    onSubmitNewTodo = () => {
        const content = this.state.todoContent;
        const list = this.state.todoList;

        const newTodo = {
            body: content,
            status: 'Active',
            id: list[list.length - 1].id + 1,
        };
        const newList = [...list, newTodo];
        this.setTodoList(newList);
        this.setTodoContent('');
    };

    render() {
        console.log('Complete list \n', this.state.completeList);
        console.log('Active list \n', this.state.activeList);
        return (
            <ImageBackground style={styles.container} source={require('../assets/images/background_image.jpg')}>
                {/* <SlidingUpPanel ref={c => this._panel = c} 
                                height={650}
                                animatedValue={new Animated.Value(680)}> */}
                <KeyboardAvoidingView
                    enabled
                    behavior="position"
                    keyboardVerticalOffset="80"
                >
                    <TodoList
                        todoList={this.state.todoList}
                        onDeleteTodo={this.onDeleteTodo}
                        onLongPress={this.confirmDialog}
                        onToggleTodo={this.onToggleTodo}
                    />

                    <NewTodoArea todoContent={this.state.todoContent}
                        setTodoContent={this.setTodoContent}
                        onSubmitNewTodo={this.onSubmitNewTodo} />
                </KeyboardAvoidingView>
                {/* </SlidingUpPanel> */}
            </ImageBackground>
        );
    };
}

export function AllScreen(props) {
    return (
        <Todo navigation={props.navigation} completeList={props} />
    );
}

AllScreen.navigationOptions = {
    headerStyle: {
        backgroundColor: Colors.headerTitleBackground,
    },
    headerTintColor: '#fff',
    headerTitle: <HeaderTitle title='All Tasks' />,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
    },
});