import React from 'react';
import { Text, View, TextInput, KeyboardAvoidingView, Button} from 'react-native';






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
   fetch('http:192.168.8.140:3336/users/signup', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.parse({
    username: this.state.username,
    email: this.state.email,
    password:this.state.password
  })
}) .then((response) => console.log(response))
      .then((data) => {
       console.log(data)
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
          onChangeText={(username) => this.setState({username})}
        />
        <Text>Email:</Text>
        <TextInput
          style={{height: 50, width: 200}}
          placeholder="Enter Email"
          returnKeyType = "next"
          keyboardType = "email-address"
          autoCapitalize = "none"
          onChangeText={(email) => this.setState({email})}
        />
        <Text>Password:</Text>
        <TextInput
          style={{height: 50, width: 200}}
          placeholder="Enter Password"
          returnKeyType = "go"
          secureTextEntry = {true}
          onChangeText={(password) => this.setState({password})}
        />
        <Button title = "submit" onPress = {this.onSignUp.bind(this)}/>
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