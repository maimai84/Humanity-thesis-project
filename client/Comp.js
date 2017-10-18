import React from 'react';
import { Text, View, TextInput, KeyboardAvoidingView, TouchableHighLight, Alert} from 'react-native';




export default class Comp extends React.Component {
  constructor(){
    super();
    this.state = {
      username: '' ,
      email: '',
      password: ''
    }
  }

onSignUp () {
   fetch('https://localhost:3336/users/signup', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: this.state.username,
    email: this.state.email,
    password:this.state.password
  })
}) .then((response) => response.json())
      .then((data) => {
        Alert.alert(
  'Alert Title',
  'My Alert Msg',
  data,
  [
    {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  { cancelable: false }
)
      })
      .catch((error) => {
        console.error(error);
      });
}
 
 render() {
    return (
      <KeyboardAvoidingView behavior = 'padding'>
      <View>
      <Text style={{fontWeight: "bold", textAlign: 'center', marginBottom: 10}}> Sign Up </Text>
        
     <Text>Username:</Text>
      <TextInput
          style={{height: 50, width: 200 }}
          placeholder="Enter Username"
          returnKeyType = "next"
          onChangeText={(username) => this.setState({username:username})}
        />
        <Text>Email:</Text>
        <TextInput
          style={{height: 50, width: 200}}
          placeholder="Enter Email"
          returnKeyType = "next"
          keyboardType = "email-address"
          autoCapitalize = "none"
          onChangeText={(email) => this.setState({email: email})}
        />
        <Text>Password:</Text>
        <TextInput
          style={{height: 50, width: 200}}
          placeholder="Enter Password"
          returnKeyType = "go"
          secureTextEntry = {true}
          onChangeText={(password) => this.setState({password: password})}
        />
        <TouchableHighLight onPress = "{this.onSignUp.bind(this)}"></TouchableHighLight>
      </View>
      
     </KeyboardAvoidingView>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'rgb(255, 0, 255)',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });