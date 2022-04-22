import React, {useState} from 'react';
import { View,StyleSheet, Text, Button, Alert, TextInput, Image, TouchableOpacity} from 'react-native';

const LoginScreen = (props) => {
    const {navigation} = props

    const signupNavigate = () => {
        navigation.navigate('SignupScreen')
    }   
    const homeNavigate = () => {
        navigation.navigate('HomeScreen')
    }
    const [email,setemail] = useState('')  //setemail is the function
    const [password,setpassword]  = useState('')
    const check = ({navigation}) =>{
    if (email.length===0 && password.length===0){
       Alert.alert("email and password cannot be empty")
    }
    if(email.length>0 && password.length===0){
        Alert.alert("password is requried")
    }
    if(email.length===0 && password.length>0){
        Alert.alert("email is requried")
    }
    if (email.length>0 && password.length>0){
        homeNavigate()
    }
}
console.log(email)  
    return( 
        <View style={styles.container}>
            <Text style={styles.text}>LOGIN PAGE</Text>
            <Image source={{uri:'https://img.etimg.com/photo/msid-82703278,quality-100/10-must-read-books800x600.jpg'}} style={image.container}></Image>
                <TextInput style={details.container}
                    placeholder='Email'
                    onChangeText={(value) => setemail(value)}
                    

                />
                <TextInput style={details.container}
                    placeholder='Password'
                    keyboardType="numeric"
                    maxLength={5}
                    onChangeText={(value) => setpassword(value)}
                />
                <TouchableOpacity 
                    style={details.button}
                onPress={check}>
                    <Text style={styles.text2}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={details.button2}
                 onPress={signupNavigate}>
                    <Text style={styles.text2}>Signup</Text>
                </TouchableOpacity>
              
        </View>
    )
}
export default LoginScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:15,
        margin:3,
       // paddingLeft:21,
        
        backgroundColor: '#61dafb',
      //  alignItems: "center",
    },
    text: {
        margin:19,
       // marginTop: 16,
        paddingVertical: 6,
        borderWidth: 2,
       // borderColor: "#20232a",
       // borderRadius: 6,
        backgroundColor: "pink",
        color: "#20232a",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
      },
    text2:{
        fontSize:16,
        fontWeight:"bold",
        color: "#20232a",
        textAlign: "center",
    }

});

const details = StyleSheet.create({
    container:{
            //padding: 14,
            fontSize:15,
            borderColor:"black",
            borderWidth:2,
            borderRadius:15,
            fontWeight:"bold",
            margin:5,
            backgroundColor:"white"
            //borderBottomColor: "red",
            //backgroundColor: "#eaeaea",
            //borderBottomWidth: StyleSheet.hairlineWidth


          },
    button:{
          alignItems: "center",
          backgroundColor: "#DDDDDD",
          padding: 15,
          margin:5,
          fontSize:20,
          borderRadius:20,
          backgroundColor:"orange"

        // paddingHorizontal:10
          },
          button2:{
            alignItems: "center",
            backgroundColor: "#DDDDDD",
            padding: 15,
            margin:5,
            fontSize:20,
            borderRadius:20,
            backgroundColor:"blue"
  
          // paddingHorizontal:10
            },
});

const image = StyleSheet.create({
    container:{
           width:350,
           height:200, 
           //justifyContent:'center',  
           margin:10       
    }
});
/*const button = StyleSheet.create({
    container:{
        backgroundColor: '#ffa07a',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 25,
    }
}); */

/*  <View style={details.button}>             
                 <Button  title="Login" onPress={check}></Button>    
                 <Text> </Text>          
                <Button  title="Signup" onPress={signupNavigate}></Button>
                </View> */