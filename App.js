import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//stack navigators
export const HomeStack = createNativeStackNavigator();
const StatsStack = createNativeStackNavigator();
const HistoryStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

//screens
import HomeStackScreen from './Screens/Home.js';
import StatsScreen from './Screens/Stats.js';
import HistoryScreen from './Screens/History.js';
import ProfileScreen from './Screens/Profile.js';

//bottom tab navigator
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  
  return (
    
    <NavigationContainer>
      <Tab.Navigator initialRouteName= "Home">
        <Tab.Screen name = "Home" component = {HomeStackScreen}/>
        <Tab.Screen name = "Statistics" component = {StatsScreen} options = {{ title: "Stats" }}/>
        <Tab.Screen name = "History" component = {HistoryScreen} options = {{ title: "History" }}/>
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