import React from 'react';
import { StyleSheet, Text, View, TouchableHighLight, Image, Button, TouchableOpacity
} from 'react-native';
import UserEditProf from './userEditProf';
import conf from '../config.js';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      information: props.information,
    }
  }
  render() {  
    return (
      <View>
    
    <View style= {{ alignItems:"center",borderColor: 'black', borderRadius: 2,backgroundColor: '#87cefa'}}>
       <Text style = {{marginTop: 20}}>Welcome {this.state.information.username}{'\n'}{'\n'}</Text>
      </View>
      <Image source={require("../images/blue.jpg")} >
      <Text style = {{marginTop: 20, marginLeft: 30,fontSize: 20,
        fontWeight: 'bold',color:'white'}}>Email:</Text>
        <Text style = {{marginTop: 20,fontSize: 13, marginLeft: 50,color:'white' }}>{this.state.information.email}</Text>
        <Text style = {{marginTop: 20, marginLeft: 30,fontSize: 20,
        fontWeight: 'bold',color:'white'}}>Rate:</Text>
        <Text style = {{marginTop: 20,color:'white',fontSize: 13, marginLeft: 50 }}>5</Text>

        <Text style = {{marginTop: 20, marginLeft: 30,fontSize: 20,
        fontWeight: 'bold',color:'white'}}>Phone Number:</Text>
        <Text style = {{marginTop: 20,color:'white',fontSize: 13, marginLeft: 50,fontSize: 13 }}>0798726360</Text>
       </Image>
    </View>
    );
  }

}




