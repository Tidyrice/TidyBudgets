import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './Screens/Home.js';
import StatisticsScreen from './Screens/Statistics.js';
import ProfileScreen from './Screens/Profile.js';

const Stack = createNativeStackNavigator();

const App = () => {

  //Write data read/write code here:

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name = "Home" component = {HomeScreen}/>
        <Stack.Screen name = "Statistics" component = {StatisticsScreen} options = {{ title: "Statistics" }}/>
        <Stack.Screen name = "Profile" component = {ProfileScreen} options = {{ title: "Profile" }}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;

//default styles
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
