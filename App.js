import React from 'react';
import { StyleSheet,
        Text, View ,
        TouchableOpacity } from 'react-native';
import list from './user'
export default class App extends React.Component {
  render() {
    return (
    
    <list/>
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
