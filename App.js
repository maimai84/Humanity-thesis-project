import React from 'react';
import { StyleSheet, View } from 'react-native';
import Comp from './client/Comp';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Comp message = "hello"/>
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