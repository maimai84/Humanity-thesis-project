import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import allStyle from './style.js';

const styles = StyleSheet.create(allStyle.userprofile);

export default class Navbar extends React.Component {
  constructor(props) {
      super(props);
    }
    render() {
      return (
        <View style={styles.container}>
          <Text>
            this is user profile
          </Text>
        </View>
      );
    }
}