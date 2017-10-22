import React from "react";
import {  View, TouchableOpacity, Text,StyleSheet } from 'react-native'

// import Entryepage from './client/Entryepage';
import entryevent from './entryevent'
export default class List extends React.Component {
   constructor(){
      super()
         this.state ={current:false,eventlist:0} ;
         fetch('http:192.168.8.140:3336/events',{'method':'GET',
             headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
             },
          })
          .then((reponse)=> {
            console.log('data : ',reponse._bodyInit);
            this.setState({eventlist:reponse._bodyInit})
         })
         // this.eventPage = () => {
         //    this.setState( prev => {
         //      return (current : this);
         //    })
         // }

         // this.Change=this.Change.bind(this);
         // this.add=this.add.bind(this)
   }

   
   render(){
      return (
         <View style={styles.container}> 
            {
               // (!this.state.current) 
               //    ? 
                  this.state.eventlist.map((event) => (
                     this.setState({current:event})
                  )) 
                  // : null
                  // <Entryepage event={props.event} />
            }
            <entryevent event = {this.state.current}/>
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

