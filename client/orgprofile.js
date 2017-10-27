import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import allStyle from './style.js';

const styles = StyleSheet.create(allStyle.userprofile);

export default class Orgprofile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "org_id" : props.org_id,
      "orgDetails" : -1
    };
    console.log(this.state);
    fetch('https://thawing-garden-23809.herokuapp.com/orgs/orgbyid',{
      method: 'POST',
      body:{"org_id": this.state.org_id}
    })
      .then((res) => {
        console.log(res)
        // body = JSON.parse(res._bodyInit);
        // console.log(body);
        if (!!body._bodyText)
          this.setState({
            orgDetails: body.org
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    if (this.state.orgDetails !== -1) {
      return (
        <View style={styles.container}>
          <Text> org name :  {this.state.orgDetails.name} </Text>
          <Text> org description : {this.state.orgDetails.description} </Text>
          <Text> org email : {this.state.orgDetails.email} </Text>
          <Text> org rate : {this.state.orgDetails.rate} </Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text>
          this is org profile {this.state.org_id}
        </Text>
      </View>
    );
  }
}