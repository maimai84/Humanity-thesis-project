import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';

import OptsList from './optslist';
import UserProfile from './userprofile';
import OrgProfile from './orgprofile';
import List from './list';
import App from '../App';





export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     type: props.profile,
     info: props.info,
     eventName: props.events.name,
     showProfile:true,
     showEvents:false,
     getOut: false
    };
    this.nav = <View style={{flexDirection: 'row', borderRadius: 15,
    borderColor: 'black',
  borderRadius: 0.5,
      backgroundColor: '#00bfff',}} >
  			<Text>                 </Text>
      	<TouchableOpacity style = {{marginTop: 30,alignItems:'center'}} onPress = {this.showprofile.bind(this)}><Text>PROFILE</Text></TouchableOpacity>
      		<Text>                  </Text>
      	<TouchableOpacity style = {{marginTop: 30}} onPress = {this.showevents.bind(this)}><Text>EVENTS</Text></TouchableOpacity>
      		<Text>                 </Text>
      	<TouchableOpacity style = {{marginTop: 30}} onPress = {this.logout.bind(this)}><Text>LOGOUT</Text></TouchableOpacity>
      	</View>
 } 

 showevents(){
 	this.setState({showProfile: false})
 	this.setState({showEvents: true})
 }
 showprofile(){
  this.setState({showProfile: true})
  this.setState({showEvents: false})
 }
 logout(){
  fetch('https://thawing-garden-23809.herokuapp.com/users/signout',
      {method:'GET'})
  this.setState({showProfile: false})
  this.setState({showEvents: false})
  this.setState({getOut: true})
 }

  showNav () {
    if(!this.state.getOut){
      return this.nav;
    }
    return null;
  }

   navb() {
   	if(this.state.type === "user" && this.state.showProfile){
   	return  <UserProfile information={this.state.info}/>
   	}else if(this.state.eventName && this.state.showEvents){
   	return  <List evName = {this.state.eventName}/>
   	}
     if(this.state.getOut && !this.state.showProfile || !this.state.showEvents){
      return <App/>
    }
  }

 render() {
 	return (
 		<View>
    {this.showNav()}
 		<View>{this.navb()}</View>
 		</View>

 		)
  }

  
}


