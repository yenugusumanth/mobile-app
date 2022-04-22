import React, { useEffect } from 'react';
import { View,StyleSheet, Text, Button, Alert, TextInput, Image} from 'react-native';
import { get_movies } from '../server_apis/movies';

//<Image source = {require('./assets/logo.png')} style={styles.container}> </Image> 
const Login = (props) => {
    const {navigation} = props

    const navigate = () => {
        navigation.navigate('Home')
    }
    const signNavigate = () => {
      navigation.navigate('Register')
  }
  useEffect(() => {
    get_movies()
    .then(response =>
    console.log("Response in Home component",response
    ));
    }, []); 
    return(
        <View style={styles.container}>
        <Text style={styles.container}>LOGIN PAGE</Text>
        <Image source={{uri:'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png'}} style={image.container}></Image>
        <TextInput style={email.container}
        placeholder={'Email'}
        />
        <TextInput style={email.container}
        placeholder={'Password'}
        />
        <Button title="Login" onPress={navigate}></Button>
        <Text>  </Text>
        <Button title="Signup" onPress={signNavigate}></Button>
        </View>
    )
}


export default Login

const styles = StyleSheet.create({
    container:{
      flex: 0.5,
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 24,
      color:"green"
    },
  });

  const email = StyleSheet.create({
    container:{
      flex: 0.5,
     // alignItems: 'center',
     // justifyContent: 'center',
      fontSize: 18,
      color: "blue"
    },
  });

 const image = StyleSheet.create({
     container:{
            width:100,
            height:100, 
            justifyContent:'center',          
     }
 })


