import React from 'react';
import { StyleSheet, View, Text, AppRegistry, Image, KeyboardAvoidingView } from 'react-native';
import Comp from './client/Comp';
import SignUp from './client/signUp';
import List from './client/eventstodo';
import Login from './client/login';
import navbar from './client/navbar';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showLogIn: false
    };
  }
  userLogin = () => {
    this.setState({ showLogIn: true });
  };
  render() {
    return (
      <View style={styles.container}>
        <SignUp/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
AppRegistry.registerComponent('App', () => App);
