import React from "react";
import {  View, StyleSheet, Text } from 'react-native'

// import Entryepage from './client/Entryepage';
import Entryevent from './Entryevent'

export default class List extends React.Component {
  constructor(){
    super()
      this.state ={current:false,eventlist:[]};
      this.getEvents = () =>{
      fetch('https://thawing-garden-23809.herokuapp.com/events',{'method':'GET',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
      }).then((response) => {

      let body = response.json();
      this.setState({eventlist : body._bodyInit});
      console.log(this.state.eventlist)
      })
      }

            
  }

   
  render(){
    return (
       <View style={styles.container}>
       <Text>rrrr</Text>
       {this.getEvents.bind(this)}
          {
               this.state.eventlist.map((event) => (<Entryevent event = {event} /> ))
          } 
          
       </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 10,
    paddingLeft: 2,
    paddingRight: 2,
    backgroundColor: '#F8F8F8',
  }
});

