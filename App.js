import React from 'react';
import { StyleSheet,
        Text, View ,
        TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Hello world</Text>
        <Text>Humanity team us do the best</Text>
        <Text>Hi Ammar</Text>
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
