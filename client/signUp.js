import React from "react";
import { Text, View, TouchableOpacity, KeyboardAvoidingView,StyleSheet,Image} from "react-native";
import UserSignUp from "./userSignUp";
import OrgSignUp from "./orgSignUp";


export default class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            showUser: false,
            mainComp: true,
            showOrg: false
        };
    }


SignUp () {
    this.setState({showUser: true, showOrg: false, mainComp: false});
}
Sign() {
    this.setState({showOrg: true, showUser: false, mainComp: false});
}

Greeting() {
 
  const mainComponent =  <View style = {{marginTop:280, alignItems: "center" }}><TouchableOpacity onPress = {this.SignUp.bind(this)}><Text>USER </Text></TouchableOpacity>
      <TouchableOpacity onPress = {this.Sign.bind(this)}><Text> ORG </Text></TouchableOpacity></View>

   
        if (this.state.showUser && !this.state.mainComp && !this.state.showOrg) {
            return <UserSignUp/>;
        }
        else if(!this.state.showComp && this.state.mainComp && !this.state.showOrg){
            return mainComponent;
     
        }
        else if (this.state.showOrg && !this.state.mainComp && !this.state.showUser) {
            return <OrgSignUp/>;

        }
    }

    render() {
        return (

            <KeyboardAvoidingView behavior = 'padding'>
                {this.Greeting()}
            </KeyboardAvoidingView>
    

    );
  }
}


