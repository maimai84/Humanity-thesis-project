// import react from "react";
// import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
// export default class events extends React.Component {
//   constructor(props) {
//     super(props);


// this.stat={events: [
//          {
//             id: 0,
//             name: 'medical',
//          },
//          {
//             id: 1,
//             name: 'social',
//          },
//          {
//             id: 2,
//             name: 'refugee',
//          },
//          {
//             id: 3,
//             name: 'arts',
//          }
//       ]
//    }
//    render() {
//       return (
//          <View> 
//             {
//                this.state.events.map((item, index) => (
//                   <TouchableOpacity
//                      key = {item.id}
//                      style = {styles.container}
//                      >
                     
//                      <Text style = {styles.text}>
//                         {item.name}
//                      </Text>
//                   </TouchableOpacity>
//                )
//             }
//          </View
//       )
//    }
// }


// const styles = StyleSheet.create ({
//    container: {
//       padding: 10,
//       marginTop: 3,
//       backgroundColor: '#d9f9b1',
//       alignItems: 'center',
//    },
//    text: {
//       color: '#4f603c'
//    }
// })
mport React, { Component } from 'react'
import {  View, TouchableOpacity } from 'react-native'

class List extends Component {
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
                     
                    
                        {item.name}
                  
                  </TouchableOpacity>
               ))
            }
         </View>
      )
   }
}
export default List

