import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import conf from '../config.js'
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
     myEvents: props.events.name,
     allEvents: [],
     showProfile:true,
     showEvents:false,
     getOut: false
    };
    this.nav = <View style={{flexDirection: 'row',
    borderColor: 'black',
  borderRadius: 2,
      backgroundColor: '#00bfff',}} >
  			  <Text>             </Text>
      	<TouchableOpacity style = {{marginTop: 30,alignItems:'center'}} onPress = {this.showprofile.bind(this)}><Text>PROFILE</Text></TouchableOpacity>
      		<Text>                  </Text>
      	<TouchableOpacity style = {{marginTop: 30}} onPress = {this.getEvents.bind(this)}><Text>FIND EVENTS</Text></TouchableOpacity>
      		<Text>                 </Text>
      	<TouchableOpacity style = {{marginTop: 30}} onPress = {this.logout.bind(this)}><Text>LOGOUT {'\n'}{'\n'}</Text></TouchableOpacity>

      	</View>
 } 
getEvents () {
  fetch(conf.url + '/events',{method:'GET'})
  .then((response) => response.json())
  .then((data) => {
    console.log('-All Events---------------->')
    console.log(data) 
      this.setState({allEvents: data})
      this.setState({showProfile: false})
      this.setState({showEvents: true})
  })
    .catch((error) => {
      console.error(error);
     });
}
 showevents(){
 	
 }
 showprofile(){
  this.setState({showProfile: true})
  this.setState({showEvents: false})
 }
 logout(){
  fetch(conf.url + '/users/signout',
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
   	}else if(this.state.showEvents){
   	return  <List events = {this.state.allEvents}/>
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
