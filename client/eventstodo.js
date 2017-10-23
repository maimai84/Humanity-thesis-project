import React from "react";
import {  View, StyleSheet, Text ,TouchableOpacity} from 'react-native'

// import Entryepage from './client/Entryepage';
import Entryevent from './Entryevent'

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
  constructor () {
    super();
    this.state = {
      current:false,
      eventlist:[]
      }
  }
            
  getEvents () {
    fetch('https://thawing-garden-23809.herokuapp.com/events',
    {
      'method':'GET',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
    })
    .then(({body}) => {
      // let body = JSON.parse(response.body);
      // console.log(response)
      console.log(body._bodyInit)
      this.setState({eventlist : body._bodyInit});
      console.log (this.state.eventlist);
     });
  }

   
  render(){
    return (
       <View style={styles.container}>
       <TouchableOpacity onPress={this.getEvents.bind(this)}>
       <Text>rrrr</Text>
       </TouchableOpacity>
       {this.getEvents.bind(this)}
          {
               this.state.eventlist.map((event) => (<Entryevent event = {event} /> ))
          } 
          
       </View>
    )
  }
}

