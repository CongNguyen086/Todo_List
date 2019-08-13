import React from 'react';
import { Text, View, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { currentActiveList } from './AllScreen';
import Colors from '../constants/Colors';
import HeaderTitle from "../components/HeaderTitle";

export default function ActiveScreen() {
  return (
    <ImageBackground style={styles.container} source={require('../assets/images/background_image.jpg')}>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>
          Active Tasks ({currentActiveList.length})
        </Text>
        <ScrollView>
          {currentActiveList.map((todo, index) => {
            return (
              <View key={todo.id} style={styles.body}>
                <Text style={styles.bodyText}>
                  {index + 1}. {todo.body}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

ActiveScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: Colors.headerTitleBackground,
  },
  headerTintColor: '#fff',
  headerTitle: <HeaderTitle title='Done Tasks' />,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  textContainer: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'rgb(240, 239, 147)',
    borderRadius: 10,
  },
  headerText: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 30,
  },
  body: {
    margin: 5,
    padding: 10,
    width: 300,
    minHeight: 20,
    color: 'white',
    borderRadius: 5,
    backgroundColor: Colors.itemDefaultBackground,
  },
  bodyText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});