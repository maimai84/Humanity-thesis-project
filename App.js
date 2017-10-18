import React from 'react';
<<<<<<< HEAD:App.js
import { StyleSheet, View } from 'react-native';
import Comp from './components/Comp';
=======
import { StyleSheet,
        Text, View ,
        TouchableOpacity } from 'react-native';
>>>>>>> 9bda1b36b73c0f907f4a7d9581ee2a4a15ac67c6:App.js

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
<<<<<<< HEAD:App.js
        <Comp message = "hello"/>
=======
        <Text> Hello world</Text>
        <Text>Humanity team us do the best</Text>
        <Text>Hi Ammar</Text>
>>>>>>> 9bda1b36b73c0f907f4a7d9581ee2a4a15ac67c6:App.js
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});