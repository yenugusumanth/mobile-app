import React , { Component } from "react";
import { Text, Button, View} from "react-native";

/* class welcome extends Component{
        render(){
            return (
                <>
                <Text> Hello bro </Text>
                </>
            )
            
        }
}
export default welcome */ //class component

/* class welcome extends Component {
    constructor(){
        super()
        this.state = {
            name: "hi bro"
        }
    }
    changeName(){
        this.setState({ 
          name: "hi"   
        })
    }
    render(){
        return(
            <>
            <Text> {this.state.name} </Text>
            <Button
            title="click"
            onPress={()=>this.changeName()}
             />
            </>
        )
    }
}
export default welcome  */ //state and this keyword

const Welcome = () => {
    return(
        <View>
        <Text>WELCOME</Text>
        </View>
    )
}
export default Welcome; 