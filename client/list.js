import React from "react";
import {  View, StyleSheet, Text ,TouchableOpacity, TouchableHighlight} from 'react-native'

import Entryevent from './entryevent';
import EventPage from './EventPage';
import OrgProfile from './orgprofile';

export default class List extends React.Component {
  constructor(){
    super();
    this.state = {
      eventlist : [],
      eventPage : -1,
      OrgProfile:-1
    };
  }
  
  EvPage (ind) {
    console.log("clicked on an event at index : " , ind );
    var ev = this.state.eventlist[ind];
    this.setState({
      eventlist:[],
      eventPage:ev,
      OrgProfile:-1
    })
    this.run();
  }

  OrgProfile (org_id) {
    console.log("clicked on org : " , org_id );
    this.setState({
      eventlist:[],
      eventPage:-1,
      OrgProfile: org_id
    })
    this.run();
  }

  getEvents () {
    fetch('https://thawing-garden-23809.herokuapp.com/events',{method: 'GET'})
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        eventlist: data
      })
      console.log( 'recieved : ', this.state.eventlist.length , ' events ..')
    })
    .catch((error) => {
      console.error(error);
    });
  }

  callBack () {
    this.setState({
      eventlist:[],
      eventPage:-1,
      OrgProfile:-1
    });
    this.run();
  }



  run () {
    if (this.state.OrgProfile !== -1) {
      return <OrgProfile org = {this.state.OrgProfile} > org profile : {this.state.OrgProfile} </OrgProfile>
    }
    if (this.state.eventPage !== -1) {
      return <EventPage callBack = {this.callBack.bind(this)} callOrgProfile = {this.OrgProfile.bind(this)} event = {this.state.eventPage} />
    }
    if(this.state.eventlist.length)
      return this.state.eventlist.map((event, index) => ( <Entryevent keys = {index} event = {event} EvPage = {this.EvPage.bind(this)} /> ))

    this.getEvents.bind(this)();
  }


render() {
    return(
      <View>{this.run()}</View>
    )
  }
}



