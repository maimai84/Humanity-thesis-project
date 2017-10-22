import React from "react";
import {  View,StyleSheet } from 'react-native'

// import Entryepage from './client/Entryepage';
import Entryevent from './entryevent'
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
export default class List extends React.Component {
  constructor(){
    super()
      this.state ={current:false,eventlist:[]} ;
    
      fetch('https://thawing-garden-23809.herokuapp.com/events',{'method':'GET',
         headers: {

          
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         },
      }).then((response) => {

      let body = response.json();
      this.setState({eventlist : body._bodyInit});
      });

            
  }

   
  render(){
    return (
       <View style={styles.container}> 
          {
               this.state.eventlist.map((event) => (<Entryevent event = {event.id} /> ))
          } 
       </View>
    )
  }
}

