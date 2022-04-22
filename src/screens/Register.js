import React from 'react';
import { View,StyleSheet, Text, Button, Alert, TextInput, Image} from 'react-native';

const Register = () => {
    return (
        <>
        <Text style={styles.register}>WELCOME TO SINGUP PAGE</Text>
        <TextInput style = {details.register}
        placeholder={'Name'}
        />
        <TextInput  style = {details.register}
        placeholder={'Email'}
        />
         <TextInput  style = {details.register}
        placeholder={'Password'}
        />
        </>
        
        
    )
}
 export default Register;

 const styles = StyleSheet.create({
     register:{
         color:"black",
         bgcolor:"pink",
         flex: 0.5,
        fontSize:24
     }
 });

 const details = StyleSheet.create({
     register:{
         height:30,
         margin:12,
         borderWidth: 1,
         color:"black",
         flex:0.5,
         fontSize:20,
         //alignItems: 'center',
         //justifyContent: 'center',
     }


 });