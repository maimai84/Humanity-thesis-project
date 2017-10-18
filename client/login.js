import React from 'react';
import { StyleSheet, Text, TextInput, View,Button, Alert} from 'react-native';
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '',password:''};
  }
  submitSignIn =()=>{
    let info = this.state;
    fetch('/users/',{'method':'POST',body:JSON.stringify(info)})
      .then((reponse)=> (reponse.json()))
      .then((responseData) => {
        Alert.alert(
          'You have signed in',
          'Welcome to your profile',responseData.username,
          [
            {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
        )
      })
  }

  render() {
    return (
     <View style={styles.container}>
      <Text style={{fontWeight: "bold", textAlign: 'center', marginBottom: 10,fontSize:30}}> Sign In </Text>
     <Text>Username:</Text>
      <TextInput
          style={{height: 50, width: 200 ,alignItems: 'center'}}
          returnKeyType='next'
          placeholder="Enter Yuor Username"
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
        />
        <Text>Password:</Text>
        <TextInput
          returnKeyType='go'
          style={{height: 50, width: 200,alignItems: 'center'}}
          placeholder="Enter Your Password"
          secureTextEntry = {true}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Button title="Sign-in" style={styles.loginSubmitButt} onPress={this.submitSignIn}/>
      </View>
    
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginSubmitButt:{
    backgroundColor:'white',
    paddingVertical:15,
  }
});