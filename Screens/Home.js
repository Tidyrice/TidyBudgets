import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { HomeStack } from '../App';
import { MonthSummary, AddSpendingScreen } from './MonthSummary';

export default function HomeStackScreen() {

  return(

    <HomeStack.Navigator>
      <HomeStack.Screen name = "Home" component = {MonthSummary}/>
      <HomeStack.Screen name = "Add" component = {AddSpendingScreen}/>
    </HomeStack.Navigator>
    
  );
}