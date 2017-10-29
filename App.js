import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Image, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import SignUp from './client/signUp';
import SignIn from './client/signIn';
import Userprofile from './client/userprofile';
// import navbar from './client/navbar';
import List from './client/list';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showSignIn: false,
      showSignUp: false,
      showMain: true,
    };
  }
  signin = () => {
    this.setState({ showSignUp: false});
    this.setState({ showSignIn: true});
    this.setState({ showMain: false });
  };
  signup = () => {
    this.setState({ showSignUp: true });
    this.setState({ showSignIn: false });
    this.setState({ showSMain: false });
  }

  main() {
 
  const mainComponent = 
 
  <View  style = {styles.container}>
    <Image source={require('./images/32799248.png')}/>

    <Text style={styles.cont1}>Wellcom to our applecation ['Humanity'] </Text>

    <View style={{flexDirection: 'row'}}>
      <Text style={styles.cont} > If you are from our family and you want to signIn WELLCOM from here</Text>
      <TouchableOpacity onPress={this.signin.bind(this)}>
        <Text style={styles.sign}>Sign in</Text>
      </TouchableOpacity>
    </View>

    <View style={{flexDirection: 'row'}} >
      <Text style={styles.cont} >Or if you want to JOIN US WELLCOM from here</Text>
      <TouchableOpacity onPress={this.signup.bind(this)}>
        <Text style={styles.sign}>Sign up</Text>
      </TouchableOpacity>
    </View>
  </View>


   
    if (this.state.showSignIn && !this.state.mainComp && !this.state.showSignUp) {
	    return <SignIn/>
	}
	else if(!this.state.showSignIn && this.state.showMain && !this.state.showSignUp){
		return mainComponent; 
	}
	else if (this.state.showSignUp && !this.state.mainComp && !this.state.showSignIn) {
	return <SignUp/>;

	}
}

  render() {
    return (
      <View style = {styles.container}>
      {this.main()}
       </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',



  },
  cont:{
    fontSize:18,
    color:"blue",
    marginLeft:30,
    marginRight:30,
    width:220,
    // borderWidth:2,
    // borderColor:'gray',
   marginBottom:25
    // borderWidth:1,

  },
  // text:{
 
   
  //  backgroundColor:'red'
  // },
  
   sign:{
    fontSize:20,
   padding:10,
    borderColor:'#fff',
   backgroundColor:'lightblue',
     margin:5,
     marginLeft:10,
     marginRight:10,
     borderBottomLeftRadius:10,
     borderTopLeftRadius:10,
     borderTopRightRadius:10,
    borderBottomRightRadius:10,
    marginRight:40
  },
   cont1:{
    fontSize:18,
    color:"blue",
    marginLeft:10,
    marginRight:10,
    marginBottom:40
}

});
AppRegistry.registerComponent('App', () => App);
