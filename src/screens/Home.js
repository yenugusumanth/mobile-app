import React from 'react';
import { Text,View, Button, Alert } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../screens/Settings'
import Welcome from '../screens/Welcome'
import { NavigationContainer } from '@react-navigation/native';






const Tab = createBottomTabNavigator();

const Home = (props) => {
    const {navigation} = props

    const SettingsNavigate = () => {
        navigation.navigate('Settings')
    }
    return (
        <View>
            <Text>Welcome to Home page</Text>

        <Tab.Navigator>
                 <Tab.Screen name="Settings" component={Settings}/>
                 <Button title="click" onPress={SettingsNavigate}></Button>
                 <Tab.Screen name="Welcome" component={Welcome}/>
        </Tab.Navigator>
        </View>

    )
}

export default Home;

/*const Hi = () => {
    return (
<> 
<Button
   title="click me"
   onPress={() => Alert.alert("check here", "once", [
       {text:"yes", onPress:() => alert("yes")},
       {text:"no", onPress:() => alert("no")},
   ])
   }
/>
<Text>"  "</Text>
<Button   
    title ="click me 2"
    onPress={() => alert("tap done")}
/>

<Button 
    title="click me3"
    onPress={()=> alert("tap here")}
/>
</>

    )
}
export default Hi; */

/* const Home = (props) =>{
    return (
      <>
      <Text>heloo {props.name} and my id is {props.id} </Text>
      </>
       
    )
}
export default Home */

