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


    showMyEvents(){

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
          fontWeight: 'bold',color:'white'}}>Phone Number:</Text>
          <Text style = {{marginTop: 20,color:'white',fontSize: 15, marginLeft: 50,fontSize: 20 }}>0798726360</Text>
          <View style = {{flexDirection:'row', marginTop: 50,marginLeft:30}}>
          <Button  style = {{width: 50, height: 70}} title = "Edit Profile" />
          <Text>                          </Text>
          <Button style = {{width: 50, height: 70}} title = "My Events" onPress = {}/>
          </View>
         </Image>

        </View>
    
    );
  }

}



/*<View style={{flexDirection: 'row',
    borderColor: 'black',
  borderRadius: 20,
      backgroundColor: '#00bfff',}} >
          <Text>             </Text>
        <TouchableOpacity style = {{marginTop: 30,alignItems:'center'}} onPress = {this.showprofile.bind(this)}><Text>PROFILE</Text></TouchableOpacity>
          <Text>                  </Text>
        <TouchableOpacity style = {{marginTop: 30}} onPress = {this.showevents.bind(this)}><Text>EVENTS</Text></TouchableOpacity>
          <Text>                 </Text>
        <TouchableOpacity style = {{marginTop: 30}} onPress = {this.logout.bind(this)}><Text>LOGOUT {'\n'}{'\n'}</Text></TouchableOpacity>

        </View>*/

