import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';


export default class Entryevent extends React.Component {
  constructor(props) {
    super(props);
    this.callEvPage = () => {
      props.EvPage(this.props.keys);
    }
  }
  render() {
    return(
      <View>
        <TouchableOpacity onPress={this.callEvPage}>
           <Text>{this.props.event.name}</Text>
        </TouchableOpacity> 
      </View>
    )
  }
}

  