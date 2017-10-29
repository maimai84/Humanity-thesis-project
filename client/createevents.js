import React from "react";
import { Text, View, TextInput, KeyboardAvoidingView, Button} from "react-native";
                

export default class Createevents extends React.Component {
    constructor(){
        super();
        this.state = {
            name: "",
            description: "",
            location: "",
            time: "",
            created:false
        };
    }

    create () {
        fetch("https://thawing-garden-23809.herokuapp.com/events/create", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: this.state.name,
                description: this.state.description,
                location:this.state.location,
                time:this.stat.time
            })
        }) .then((response) => console.log(response))
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    myFunctions(){
        this.creat();
        this.setState({created: true});
    }

    goCreate () {
        
            return <View>
                <Text style={{fontWeight: "bold", textAlign: "center", marginBottom: 10}}> Creat </Text>
        
                <Text>eventname:</Text>
                <TextInput
                    style={{height: 50, width: 200 }}
                    placeholder="Enter eventname"
                    returnKeyType = "next"
                    onChangeText={(eventname) => this.setState({eventname})}
                />
                <Text>description:</Text>
                <TextInput
                    style={{height: 50, width: 200}}
                    placeholder="desctiption"
                    returnKeyType = "next"
                    
                    onChangeText={(desctiption) => this.setState({desctiption})}
                />
                <Text>location:</Text>
                <TextInput
                    style={{height: 50, width: 200}}
                    placeholder="location"
                    returnKeyType = "next"
                    
                    onChangeText={(location) => this.setState({location})}
                />
                   <Text>time:</Text>
                <TextInput
                    style={{height: 50, width: 200}}
                    placeholder="time"
                    returnKeyType = "go"
                    
                    onChangeText={(time) => this.setState({time})}
                />
                <Button title = "submit" onPress = {this.myFunctions.bind(this)} />
            </View>;
        }
    




    render() {
        return (
            <View>
                {this.goCreate()}
            </View>
        );
    }
}