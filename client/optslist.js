import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';

import allStyle from './style.js';

const styles = StyleSheet.create(allStyle.optsList);

export default class OptsList extends React.Component {
  constructor() {
    super();
    this.getProfile = () => {
      let info = this.state;
      fetch('http:192.168.8.140:3336/users/userinfo', 
        {
          'method':'GET', 
          'headers': { 'Accept': 'application/json', 'Content-Type': 'application/json'
        }
      })
      .then((reponse)=> (console.log('data : ',reponse._bodyInit)));
      
    }
    this.logMeOut () {
      fetch('http:192.168.8.140:3336/users/signout', 
        {
          'method':'GET', 
        }
      })
      .then((reponse)=> (console.log('data : ',reponse._bodyInit)));
      
    }
  }
  render() {
    return (
      <View style={styles.container}>
      { 
        <TouchableOpacity style={styles.optionsContainer} onPress={this.getProfile.bind(this)}>
          <Text style={styles.options}> profile </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionsContainer} onPress={this.logMeOut.bind(this)}>
          <Text style={styles.options}> logout </Text>
        </TouchableOpacity>
      }
      </View>
    );
  }
}
