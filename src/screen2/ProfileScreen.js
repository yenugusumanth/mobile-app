import React from 'react';
import { View,StyleSheet, Text, Button, Alert, TextInput, Image, TouchableOpacity} from 'react-native';

const ProfileScreen = (props) => {
    const {navigation} = props

    const loginNavigate = () => {
        navigation.navigate('LoginScreen')
    }
    return(
        <View style={styles.container}>
            <Image source={{uri:'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png'}} style={image.container}></Image>
            <Text style={{marginLeft:130,fontWeight:'bold',fontSize:17,backgroundColor:'gray',marginRight:150}}>MY PROFILE</Text>
                  <TextInput style={details.container}
                    placeholder={'previous email'}
                />
                  <TextInput style={details.container}
                    placeholder={'new mail'}
                />
                <TextInput style={details.container}
                    placeholder={'confirm new mail'}
                />
                 <TouchableOpacity
                  style={details.button}
                onPress={()=> alert("UPDATED SUCCESFULLY")}>
                <Text style={details.text}>Update</Text>
                </TouchableOpacity>
                <TouchableOpacity
                 style={details.button}
                 onPress={loginNavigate}>
                     <Text style={details.text}>Logout</Text>
                 </TouchableOpacity>
                 
        </View>
    )
}
export default ProfileScreen;

const styles=StyleSheet.create({
    container:{  
        flex:1,
        borderWidth: 1,
        backgroundColor: "lightgray",
        
       
    },
    text: {
        marginTop: 16,
        padding:8,
        borderWidth: 2,
        borderColor: "#20232a",
        borderRadius: 20,
        marginLeft:12,
        marginRight:12,
        backgroundColor: "#61dafb",
        color: "#20232a",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
      },
      text2:{
        fontSize:20,
        fontWeight:"bold",
        color: "#20232a",
        textAlign: "center",
    }

});

const details = StyleSheet.create({
    container:{
            paddingLeft: 14,
            fontSize:15,
            fontWeight:"bold",
            borderColor:"black",
            borderWidth:2,
            margin:10,
            borderRadius:15,
           // borderBottomColor: "red",
            backgroundColor: "#eaeaea",
            //borderBottomWidth: StyleSheet.hairlineWidth


          },
    button:{
          backgroundColor: 'lightblue',
          borderWidth: 3,
          alignItems: 'center',
          borderRadius: 10,
          padding:10,
          margin:5,
          //borderColor: '#7DE24E',
          //height: 40,
         // color: '#FFFFFF',
          marginLeft: 35,
          marginRight: 35,
          marginTop: 20,
          //marginBottom: 25,  
          },
     text:{
        alignItems: 'center',
        fontWeight: "bold",
        fontSize: 16,
     }, 
     text2:{
         alignItems:'center',
         justifyContent:"center",
         fontSize:15,
         fontWeight:'bold',
         marginLeft:150
     }
});

const image = StyleSheet.create({
    container:{
           width:100,
           height:100, 
           justifyContent:'center',  
           alignItems:'center',
           marginLeft:130     
    }
})

