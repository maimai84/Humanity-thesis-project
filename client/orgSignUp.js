import React from "react";
import { Text, View, TextInput, KeyboardAvoidingView, Button,StyleSheet} from "react-native";
import LogInOrgs from "./logInOrgs";


export default class OrgSignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            name: "" ,
            email: "",
            description: "",
            password: "",
            signedUp: false
        };
    }


    onSignUp () {
        fetch("https://thawing-garden-23809.herokuapp.com/orgs/signup", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                description: this.state.description,
                password:this.state.password
            })
        }) .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    myFunctions(){
        this.onSignUp();
        this.setState({signedUp: true});
    }

    goToLogIn () {
        if(this.state.signedUp)
            return <LogInOrgs/>;


        else{
            return <View>
                <Text style={{fontWeight: "bold", textAlign: "center", marginBottom: 10}}> Sign Up </Text>
        
                <Text style={styles.textcontaniar}>Username:</Text>
                <TextInput
                style={styles.textcontaniar1}

                    // style={{height: 50, width: 200 }}
                    placeholder="Enter name"
                    returnKeyType = "next"
                    onChangeText={(name) => this.setState({name})}
                />
                <Text style={styles.textcontaniar}>Email:</Text>
                <TextInput
                style={styles.textcontaniar1}
                    // style={{height: 50, width: 200}}
                    placeholder="Enter Email"
                    returnKeyType = "next"
                    keyboardType = "email-address"
                    autoCapitalize = "none"
                    onChangeText={(email) => this.setState({email})}
                />
                <Text style={styles.textcontaniar}>Description:</Text>
                <TextInput
                style={styles.textcontaniar1}
                    // style={{height: 50, width: 200}}
                    placeholder="Enter description of your work"
                    returnKeyType = "next"
                    onChangeText={(description) => this.setState({description})}
                />
                <Text style={styles.textcontaniar}>Password:</Text>
                <TextInput
                style={styles.textcontaniar1}
                    // style={{height: 50, width: 200}}
                    placeholder="Enter Password"
                    returnKeyType = "go"
                    secureTextEntry = {true}
                    onChangeText={(password) => this.setState({password})}
                />
                <Button title = "submit" onPress = {this.myFunctions.bind(this)}/>
            </View>;

        }


    }
    render() {
        return (
            <View>
                {this.goToLogIn()}
            </View>
        );
    }

}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'rgb(255, 0, 255)',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
const styles = StyleSheet.create({
  textcontaniar1:{
    fontSize:20,
    padding:10,
    borderColor:'#fff',

     margin:5,
     marginLeft:10,
     marginRight:10,
     height:50,
    width:250,
    borderBottomLeftRadius:10,
     borderTopLeftRadius:10,
     borderTopRightRadius:10,
    borderBottomRightRadius:10,
  },
  
  textcontaniar:{
    fontSize:20,
   padding:10,
    borderColor:'#fff',
   backgroundColor:'lightblue',
     margin:5,
     marginLeft:10,
     marginRight:10,
     borderBottomLeftRadius:10,
     borderTopLeftRadius:10,
     borderTopRightRadius:10,
    borderBottomRightRadius:10, 
    height:50,
    width:250
  
  }
  
});
