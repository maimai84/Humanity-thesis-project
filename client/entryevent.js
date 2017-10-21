import React from 'react';

import { Text, View,TouchableOpacity} from 'react-native';
export default class entryevent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    retern(
      <View>
            <TouchableOpacity
              key = {props.event.id}
              >
               <Text>{props.event.name}</Text>
               <Text>{props.event.descreption}</Text>
               <Text>{props.event.location}</Text>
               <Text>{props.event.orgs_id}</Text>
             </TouchableOpacity> 
      </View>
    )
  }
}
  