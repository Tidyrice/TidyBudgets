import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//screens
import HomeStackScreen from './Screens/Home.js';
import StatisticsScreen from './Screens/Statistics.js';
import ProfileScreen from './Screens/Profile.js';

//stack navigators
export const HomeStack = createNativeStackNavigator();
const StatisticsStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

//bottom tab navigator
const Tab = createMaterialBottomTabNavigator();

//data
import { Save, Load } from './Data Management/SaveSystem.js';
let data = Load();

export default function App() {
  
  return (
    
    <NavigationContainer>
      <Tab.Navigator backBehavior = "history" initialRouteName= 'Home'>
        <Tab.Screen name = "Home" component = {HomeStackScreen}/>
        <Tab.Screen name = "Statistics" component = {StatisticsScreen} options = {{ title: "Statistics" }}/>
        <Tab.Screen name = "Profile" component = {ProfileScreen} options = {{ title: "Profile" }}/>
      </Tab.Navigator>
    </NavigationContainer>

  );
}

//default styles
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});