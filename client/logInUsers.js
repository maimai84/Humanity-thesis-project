import conf from '../config.js'
import React from 'react';
import { StyleSheet, Text, TextInput, View,TouchableOpacity, Button} from 'react-native';
import Navbar from './navbar';

export default class loginInUseres extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:'',
      signedIn: false,
      userInfo:{}
    };
     fetch( conf.url + '/users/signout',
      {method:'GET'})
  }

  
submitSignIn () { 
      
     fetch(conf.url + '/users/signin',
      {
          method:'POST',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          },
          body:JSON.stringify({
            username:this.state.username ,
            password:this.state.password})
        }) .then((response) => response.json())
           .then((data) => {
            console.log('------------------------------------>')
            console.log(data) 
              this.state.userInfo.info = data;
              this.setState({signedIn: true})
          })
            .catch((error) => {
              console.error(error);
     });
}




myFunctions(){
 this.submitSignIn();
}


goToProfile () {
  if(this.state.signedIn)
    return <Navbar info = {this.state.userInfo.info} profile = {"user"} events = {this.state.userInfo.info.events[0]}/>

  else{
    return <View style = {{marginTop:200,  alignItems: 'center' }}>
      <Text style={{fontWeight: "bold", textAlign: 'center', marginBottom: 10,fontSize:30}}> Sign In </Text>
     <Text style = {{marginRight:130}}>Username:</Text>
      <TextInput 
          style={{height: 50, width: 200 ,alignItems: 'center'}}
          returnKeyType='next'
          placeholder="Enter Yuor Username"
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
        />
        <Text style = {{marginRight:130}}>Password:</Text>
        <TextInput
          returnKeyType='go'
          style={{height: 50, width: 200,alignItems: 'center'}}
          placeholder="Enter Your Password"
          secureTextEntry = {true}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Button title = "submit" onPress = {this.myFunctions.bind(this)}/>
      </View>
    }
}




render() {
  return (
      <View>
        {this.goToProfile()}
      </View>
    
    );
  }
}


