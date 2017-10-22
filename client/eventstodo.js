import React from "react";
import {  View, TouchableOpacity, Text } from 'react-native'

export default class List extends React.Component {
   state = {
      names: [
         {
            id: 0,
            name: 'Ben',
         },
         {
            id: 1,
            name: 'Susan',
         },
         {
            id: 2,
            name: 'Robert',
         },
         {
            id: 3,
            name: 'Mary',
         }
      ]
   }
   alertItemName = (item) => {
      alert(item.name)
   }
   render(){
      return (
         <View> 
            {
               this.state.names.map((item) => (
                  <TouchableOpacity
                     key = {item.id}
                    
                     onPress = {() => this.alertItemName(item)}>
                        <Text>{item.name}</Text>
                  
                  </TouchableOpacity>
               ))
            }
         </View>
      )
   }
}

