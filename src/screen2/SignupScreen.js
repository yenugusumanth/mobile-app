import React, {useState} from 'react';
import { View,StyleSheet, Text, Button, Alert, TextInput, Image,TouchableOpacity} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { Picker } from '@react-native-picker/picker';
import CheckBox  from '@react-native-community/checkbox';


const SignupScreen = (props) => {
    const {navigation} = props
    
    const loginNavigate = () => {
        navigation.navigate('LoginScreen')
    }
    const [selectedValue, setSelectedValue] = useState("");
    const [isSelected, setSelection] = useState(false);
    return(
        <View style={styles.container}>
            <Text style={styles.text}>SIGNUP PAGE</Text>
                <TextInput style={details.container}
                    placeholder={'Name'}
                />
                <TextInput style={details.container}
                    placeholder={'Email'}
                />
                <Picker 
                  selectedValue={selectedValue}
                  style={{ height: 50, width: 150 }}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                <Picker.Item label="INDIA" value="INDIA" />
                <Picker.Item label="UK" value="UK" />
                <Picker.Item label="USA" value="USA" />
               </Picker>
                
                <TextInput style={details.container}
                    placeholder={'Password'}
                />
                <TextInput style={details.container}
                    placeholder={'Confirm Password'}
                />
                <View>
                <Text style={details.text2}>ARE U 18+</Text>
                <CheckBox
                style={details.text2}
                value={isSelected}
                onValueChange={setSelection}
                /> 
                </View>
                <TouchableOpacity
                    style={details.button}
                    onPress={loginNavigate}>
                    <Text style={styles.text2}>Signup</Text>
                </TouchableOpacity>
                
                
                

        </View>
    )
}
export default SignupScreen;


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
          backgroundColor: 'yellow',
          borderWidth: 3,
          alignItems: 'center',
          borderRadius: 10,
          padding:10,
          margin:20,
          //borderColor: '#7DE24E',
          //height: 40,
         // color: '#FFFFFF',
          marginLeft: 35,
          marginRight: 35,
          marginTop: 20,
          marginBottom: 25,  
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

/*<Text>
                <select>
                    <option value = "India">India</option>
                    <option value = "USA">USA</option>
                    <option value = "London">London</option>
                    <option value = "UK">UK</option>
                </select>
                </Text>
                
                 <Text>ARE U 18+</Text>
                <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                />             */
