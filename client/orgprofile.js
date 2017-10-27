import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import allStyle from './style.js';

const styles = StyleSheet.create(allStyle.userprofile);

export default class Orgprofile extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.org)
    this.state = {
      "org" : props.org,
      "orgDetails" : -1
    };
    console.log(this.state);
    fetch('https://thawing-garden-23809.herokuapp.com/orgs/orgbyevent',{method: 'POST'})
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          orgDetails: data
        })
        console.log( 'recieved : ', this.state.eventlist.length , ' events ..')
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    if (this.state.orgDetails !== -1) {
      return (
        <View style={styles.container}>
          <Text> this is org profile {this.state.org.name} </Text>
          <Text> this is org profile {this.state.org.description} </Text>
          <Text> this is org profile {this.state.org.email} </Text>
          <Text> this is org profile {this.state.org.rate} </Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text>
          this is org profile {this.state.org}
        </Text>
      </View>
    );
  }
}