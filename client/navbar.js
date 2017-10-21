import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';

import allStyle from './style.js';
import OptsList from './optslist.js';
import signin from './login.js';
import Userprofile from './Userprofile.js';
import Orgprofile from './Orgprofile.js';
import Eventslist from './eventstodo.js.js';

const styles = StyleSheet.create(allStyle.navbar);

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opts : false,
      type : props.type
    };
    this.toggleOptions = () => {
      this.setState(previousState => {
        return { opts : !previousState.opts };
      });
    }
    this.currentView = (toShow) => {
      if (toShow === undefined) { 
        return <OptsList whatToView={this.whatToView.bind(this)} />
      } else if (toShow === "signed out") {
        //do something to tell app.js to hide this navbar and show only the sign in view 
        return <signin />
      } else if (toShow.profile) {
        if (this.State.type === "user"){
          return <Userprofile profileData={{toShow.profile}} />
        }
        return <Orgprofile profileData={{toShow.profile}} />
      }
      return <Eventslist />
    }

    this.whatToView = (clicked) => {
      this.toggleOptions();
      this.currentView(clicked);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.optionsContainer} onPress={this.toggleOptions.bind(this)}>
          <Text style={styles.options}> options </Text>
        </TouchableOpacity>
        {this.state.opts && <OptsList whatToView={this.whatToView.bind(this)}/>}
        {this.currentView()}
      </View>
    );
  }
}

