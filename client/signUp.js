import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import Comp from './Comp';






export default class SignUp extends React.Component {
  constructor(){
    super();
    this.state = {
     showComp: false,
     mainComp: true,
     user: false 
    }
  }

SignUp () {
    this.setState({showComp: true, mainComp: false});
}
Sign() {
    this.setState({user: true, mainComp: false});
}

Greeting() {
 
  const mainComponent =  <View><TouchableOpacity onPress = {this.SignUp.bind(this)}><Text>ORG </Text></TouchableOpacity>
      <TouchableOpacity onPress = {this.Sign.bind(this)}><Text>USER </Text></TouchableOpacity></View>

   
    if (this.state.showComp && !this.state.mainComp) {
    return <Comp/>;
  }
  else if(!this.state.showComp && this.state.mainComp){
    return mainComponent;
     
  }
    return null;

}

render() {
    return (

      <View>
        {this.Greeting()}
      </View>
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