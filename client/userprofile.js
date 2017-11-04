
import React from 'react';
import { StyleSheet, Text, View, TouchableHighLight, Image, Button
} from 'react-native';

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
      <View>
      
      <View style= {{ alignItems:"center",borderColor: 'black', borderRadius: 2,backgroundColor: '#87cefa'}}>
         <Text style = {{marginTop: 20}}>Welcome {this.state.information.username}{'\n'}{'\n'}</Text>
        </View>
        <Image source={require("../images/blue.jpg")} >
        <Text style = {{marginTop: 20, marginLeft: 30,fontSize: 20,
          fontWeight: 'bold',color:'white'}}>Email:</Text>
          <Text style = {{marginTop: 20,fontSize: 20, marginLeft: 50,color:'white' }}>{this.state.information.email}</Text>

          <Text style = {{marginTop: 20, marginLeft: 30,fontSize: 20,
          fontWeight: 'bold',color:'white'}}>Rate:</Text>
          <Text style = {{marginTop: 20,color:'white',fontSize: 20, marginLeft: 50 }}>5</Text>

          <Text style = {{marginTop: 20, marginLeft: 30,fontSize: 20,
          fontWeight: 'bold',color:'white'}}>Phon number:</Text>
          <Text style = {{marginTop: 20,color:'white',fontSize: 15, marginLeft: 50,fontSize: 20 }}>0798726360</Text>
          <View style = {{flexDirection:'row', marginTop: 50,marginLeft:30}}>
          <Button  style = {{width: 50, height: 70}} title = "Edit Profile" />
          <Text>                          </Text>
          <Button style = {{width: 50, height: 70}} title = "My Events" />
          </View>
         </Image>

        </View>
    
    );
  }

}





