import React, {useState} from 'react';
import { View,StyleSheet, Text, Button, Alert, TextInput, Image, FlatList} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favourites from '../screen2/Favourites';
import Today from '../screen2/Today';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = (props) => {
    const {navigation} = props

    const profileNavigate = () => {
        navigation.navigate('ProfileScreen')
    }
    const Tab = createBottomTabNavigator();
    return(
         <>
            <Tab.Navigator
           screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Today') {
                iconName = focused
                  ? 'calendar' : 'calendar';
              } else if (route.name === 'Favourites') {
                iconName = focused ? 'heart' : 'heart';
              }
  
              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'gray',
          })}
                > 
                <Tab.Screen name="Today" component={Today}/>
                 <Tab.Screen name="Favourites" component={Favourites}/>
                 
            </Tab.Navigator>
            <Button title="Profile" onPress={profileNavigate}></Button> 
                </>
       
    )
}
export default HomeScreen;

const styles = StyleSheet.create({
    container:{
    //alignItems: "center",
    //flex:1,
    fontSize:24
    },
    text:{
        flex:1,
        fontSize:24,
        justifyContent:'center',
        textAlign:'center',
        backgroundColor: "skyblue",
        //borderWidth: 2,
        borderBottomWidth:1,
        width:400,
        height:100,
        margin:3,
        color:"red",
        

    },
    button:{
        justifyContent:'center',
        alignItems:'center',

    },
})

/*  <FlatList 
            //horizontal   
            data={Items}
           // numColumns={numColumns}
            renderItem={({item}) => (
                <View style={styles.container}>
                    <Text style={styles.text}>{item.name}</Text>
                    </View>
            )}
            />*/

           // <View><Button title="Profile" onPress={profileNavigate}></Button></View>