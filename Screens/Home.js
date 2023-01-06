import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MonthSummary, AddSpendingScreen } from './MonthSummary';
import { CurrentYear, CurrentMonth } from '../scripts.js'
import { MonthSummaryParameter } from '../Data Management/data';

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {

  return(

    <HomeStack.Navigator initialRouteName = "CurrentMonth">

      <HomeStack.Screen
        name = "CurrentMonth"
        component = {MonthSummary}
        initialParams = {new MonthSummaryParameter(CurrentYear(), CurrentMonth())}
      />

      <HomeStack.Screen
        name = "Add Spending"
        component = {AddSpendingScreen}
      />

    </HomeStack.Navigator>
    
  );

}