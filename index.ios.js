/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import HomeVC from './Home/HomeVC';

export default class React_Study extends Component {


  render() {
    return (
      //<View style={styles.container}>
      //  <Text style={styles.welcome}>
      //    Welcome to React Native!
      //  </Text>
      //  <Text style={styles.instructions}>
      //    To get started, edit index.ios.js
      //  </Text>
      //  <Text style={styles.instructions}>
      //    Press Cmd+R to reload,{'\n'}
      //    Cmd+D or shake for dev menu
      //  </Text>
      //</
      <HomeVC></HomeVC>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
var homeStyle = StyleSheet.create({
  mainViewStyle: {

    backgroundColor: '#FF0000'
  },
  textStyle: {
    marginTop: 50,
    marginLeft: 30
  }

});
AppRegistry.registerComponent('React_Study', () => React_Study);
