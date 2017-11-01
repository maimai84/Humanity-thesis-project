import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import allStyle from './style.js';


export default class Orgprofile extends React.Component {
  constructor(props) {
      super(props);
    }
    render() {
      return (
        <View>
        <Text>
          {this.props.info[0].name}
        </Text>
        </View>
      );
    }
}