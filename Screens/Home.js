import { HomeStack } from '../App';
import { MonthSummary, AddSpendingScreen } from './MonthSummary';

//data
import { LoadMonthAsync } from '../Data Management/SaveSystem.js';
import { CurrentMonth, CurrentYear } from '../scripts.js'

let currentMonthData = LoadMonthAsync(CurrentYear(), CurrentMonth());
console.log(currentMonthData);

export default function HomeStackScreen() {

  return(

    <HomeStack.Navigator>
      <HomeStack.Screen name = "CurrentMonth" component = {MonthSummary} initialParams = {currentMonthData}/>
      <HomeStack.Screen name = "Add" component = {AddSpendingScreen}/>
    </HomeStack.Navigator>
    
  );
}