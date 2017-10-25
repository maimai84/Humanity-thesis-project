import React from "react";
import { Text, View} from "react-native";
// import allStyle from "./style.js";
// const styles = StyleSheet.create(allStyle.userprofile);

export default class Userprofile extends React.Component {
<<<<<<< HEAD
    constructor(props) {
        super(props);

    }
    profile() {
        
        if(this.props.userprofile) {
            return  (<View>
                <Text>
                    {this.props.userprofile.username}
                </Text>
                <Text>
                    {this.props.userprofile.email}
                </Text>
                <Text> 
                    {this.props.userprofile.rate}
                </Text>
            </View>);
        }
        return <Text>not signed in or no props passeed</Text>;
    }


    render() {
        return (
            <View>
                {this.profile()}
            </View>
        );
=======
  constructor(props) {
      super(props)
  }
    render() {
      return (
        <View style={styles.container}>
          <Text>
            {this.props.name[0].username}
          </Text>
        </View>
      );
>>>>>>> b3acf07e8eb58e7b1c154fd549aa869629f0cd4a
    }
}

// if(this.props.userprofile.userevent){
//                     this.props.userevent.map((event, index) => (<Entryevent  key = {index} event = {event} /> ))
//                   }
//                   if(this.props.userprofile.userorgs){
//                     this.props.userorgs.map((event, index) => (<Entryevent  key = {index} event = {event} /> ))
//                   }