import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Colors from '../constants/Colors';
import HeaderTitle from '../components/HeaderTitle';

const SingleTodoScreen = props => {
    const { id, status, body } = props.navigation.state.params.updatedTodo;
    return (
        <ImageBackground style={styles.container} source={require('../assets/images/background_image.jpg')}>
            <View style={styles.textContainer}>
                <Text style={styles.headerText}>
                    {status}
                </Text>
                <View style={styles.body}>
                    <Text style={styles.bodyText}>{id}. {body}</Text>
                </View>
            </View>
        </ImageBackground>
    );
};

SingleTodoScreen.navigationOptions = {
    headerStyle: {
        backgroundColor: Colors.headerTitleBackground,
    },
    headerTintColor: '#fff',
    headerTitle: <HeaderTitle title='Task Details' />
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
    },
    textContainer: {
        padding: 10,
        backgroundColor: 'rgb(240, 239, 147)',
        borderRadius: 10,
    },
    headerText: {
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
    },
    body: {
        margin: 5,
        padding: 10,
        width: 300,
        minHeight: 20,
        color: 'white',
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: Colors.itemDefaultBackground,
    },
    bodyText: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    },
});

export default SingleTodoScreen;