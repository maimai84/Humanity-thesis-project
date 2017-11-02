import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default class EventPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <View>
      <Image source={require("../images/blue.jpg")} >
        <TouchableOpacity >
           <Text>{this.props.event.name}</Text>
           <Text>{this.props.event.description}</Text>
           <Text>{this.props.event.location}</Text>
           <Text>{this.props.event.time}</Text>
        </TouchableOpacity> 
        </Image>
      </View>
    )
  }
}
// const styles = StyleSheet.create(
//     {
//         container: {
    
//             fontSize: 14,
//             lineHeight: 24,
//             color: "black"
//         },
//         container1: {  
//             fontSize: 14,
//             lineHeight: 24,
//             color: "blue"
//         },
//         cont: {
//             backgroundColor:"#99ceff",
//             width:350,
//             marginLeft:0,
//             marginRight:0
     
//         //    justifyContent: 'space-between'
//         }
//     }
// );
