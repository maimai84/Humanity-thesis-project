import React from "react";

import {  View, StyleSheet, Text ,TouchableOpacity, TouchableHighlight, Image} from 'react-native'
import Entryevent from './entryevent'
import EventPage from './EventPage';
import OrgProfile from './orgprofile';

export default class List extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      eventlist : props.events,
      eventPage : -1,
      OrgID:-1
    };
  }
  
  // EvPage (ind) {
  //   console.log("clicked on an event at index : " , ind );
  //   var ev = this.state.eventlist[ind];
  //   this.setState({
  //     eventlist:[],
  //     eventPage:ev,
  //     OrgID:-1
  //   })
  //   this.run();
  // }


 



  // callBack () {
  //   this.setState({
  //     eventlist:[],
  //     eventPage:-1,
  //     OrgID:-1
  //   });
  //   this.run();
  // }

  // run () {
  //   if (this.state.OrgID !== -1) {
  //     return <OrgProfile org_id = {this.state.OrgID} > org profile : {this.state.OrgID} </OrgProfile>
  //   }
  //   if (this.state.eventPage !== -1) {
  //     return <EventPage callBack = {this.callBack.bind(this)} callOrgProfile = {this.OrgProfile.bind(this)} event = {this.state.eventPage} />
  //   }
  //   if(this.state.eventlist.length)
  //     return 


  //   this.getEvents.bind(this)();
  // }
  
    render() {
        return(
            <View>
            <Image source={require("../images/blue.jpg")} >
              {this.state.eventlist.map((event, index) => (<Entryevent key = {index} event = {event}/> ))}
              </Image>
            </View>
    )
  }
}