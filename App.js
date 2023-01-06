import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//screens
import HomeStackScreen from './Screens/Home.js';
import StatisticsScreen from './Screens/Statistics.js';
import HistoryStackScreen from './Screens/History.js';
import ProfileScreen from './Screens/Profile.js';

//bottom tab navigator
const Tab = createMaterialBottomTabNavigator();
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function App() {
  
  return (
    
    <NavigationContainer>
      <Tab.Navigator initialRouteName = "HomeScreen" activeColor = "#ef5d8d" barStyle = {{backgroundColor: "white"}}>
        <Tab.Screen name = "HomeScreen"
          component = {HomeStackScreen}
          options = {{
            title: "Home",
            tabBarIcon: ({color}) => (
              <MaterialIcons name = "home" color = {color} size = {26} />
            ),
          }}
        />
        <Tab.Screen name = "StatisticsScreen"
          component = {StatisticsScreen}
          options = {{
            title: "Stats",
            tabBarIcon: ({color}) => (
              <MaterialIcons name = "analytics" color = {color} size = {26} />
            ),
          }}
        />
        <Tab.Screen name = "HistoryScreen"
          component = {HistoryStackScreen} 
          options = {{
            title: "History",
            tabBarIcon: ({color}) => (
              <MaterialIcons name = "history" color = {color} size = {26} />
            ),
          }}
        />
        <Tab.Screen name = "ProfileScreen"
          component = {ProfileScreen}
          options = {{
            title: "Profile",
            tabBarIcon: ({color}) => (
              <MaterialIcons name = "person" color = {color} size = {26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({

});