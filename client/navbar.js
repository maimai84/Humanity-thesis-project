import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';

import allStyle from './style.js';
import OptsList from './optslist.js';

const styles = StyleSheet.create(allStyle.navbar);

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { opts : false};
    this.toggleOptions = () => {
      this.setState(previousState => {
        return { opts : !previousState.opts };
      });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.optionsContainer} onPress={this.toggleOptions.bind(this)}>
          <Text style={styles.options}> options </Text>
        </TouchableOpacity>
         { this.state.opts && <OptsList/> }
      </View>
    );
  }
}

