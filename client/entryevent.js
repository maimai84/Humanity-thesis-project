import React from 'react';

import { Text, View,TouchableOpacity} from 'react-native';
export default class Entryevent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    retern(
      <View>
            <TouchableOpacity>
                <Text>{props.event.name}</Text>
                <Text>{props.event.descreption}</Text>
                <Text>{props.event.location}</Text>
                <Text>{props.event.orgs_id}</Text>
             </TouchableOpacity> 
      </View>
    )
  }
}
                
  