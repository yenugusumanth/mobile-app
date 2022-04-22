import 'react-native-gesture-handler';
import React , { Component }from 'react';
import { Text, SafeAreaView } from 'react-native';
import Home from './src/screens/Home';
import Welcome from './src/screens/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Settings from './src/screens/Settings';
import { Provider } from 'react-redux';
import { store } from "./src/redux/Store";
import Counter from "./src/redux/Counter"


import LoginScreen from './src/screen2/LoginScreen';
import SignupScreen from './src/screen2/SignupScreen';
import HomeScreen from './src/screen2/HomeScreen';
import ProfileScreen from './src/screen2/ProfileScreen';
import Favourites from './src/screen2/Favourites';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
            <Stack.Navigator>
                        <Stack.Screen name="LoginScreen" component={LoginScreen} />
                        <Stack.Screen name="SignupScreen" component={SignupScreen} />
                        <Stack.Screen name="HomeScreen" component={HomeScreen} />                        
                        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
                        
            </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
























































































































/*const App = () => {
    return(
      <Provider store={store}>
        <Counter/>
      </Provider>
    )
}

export default App; */



/*const App = () => {
    return (
        <SafeAreaView>
            <Home />     
            <Text> " " </Text>      
        </SafeAreaView>  

    )
}
export default App;*/

/* class App extends Component {
    render(){
        return(
            <SafeAreaView>
                <Home name="a" id="123" />
                <Home name="b" id="124" />
            </SafeAreaView>    
           
        );
    }
}
export default App */

/* const App = () => {
    return (
        <SafeAreaView>
            <Welcome />
        </SafeAreaView>
    )
}
export default App  */ //class component and state method

/*const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
                <Stack.Navigator>
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen name="Register" component={Register} />
                        <Stack.Screen name="Welcome" component={Welcome} />
                        <Stack.Screen name="Settings" component={Settings} />


                </Stack.Navigator>
        </NavigationContainer>        
        
      
    )
}
export default App  */

/*const Stack = createNativeStackNavigator();

const App = () => {
    return(
        <NavigationContainer>
                <Stack.Navigator>     
                        <Stack.Screen name="Welcome" component={Welcome} />
                        <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App */

/* const Drawer = createDrawerNavigator();

const App = () => {
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Welcome" component={Welcome} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
export default App */

/*const Tab  = createBottomTabNavigator(); */

 /* const Tab = createMaterialBottomTabNavigator();

const App = () =>{
    return (
        <NavigationContainer>
             <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Welcome" component={Welcome} />
            </Tab.Navigator>
        </NavigationContainer>
       
    )
}

export default App */