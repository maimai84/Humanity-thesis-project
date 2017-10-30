import React from 'react';
import { StyleSheet, Text, View, TouchableHighLight} from 'react-native';

export default class UserProfile extends React.Component {
  constructor(props) {
      super(props)
      this.state= {
        information: props.information,
       
      }
  }

    showUserProfile(){

    }

    render() {
    return (
      <View style= {{marginTop: 20, alignItems:"center"}}>
         <Text>{this.state.information.username}</Text>
        </View>
    
    );
  }

}





