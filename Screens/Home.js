import { HomeStack } from '../App';
import { MonthSummary, AddSpendingScreen } from './MonthSummary';
import { CurrentYear, CurrentMonth } from '../scripts.js'
import { MonthSummaryParameter } from '../Data Management/data';

export default function HomeStackScreen() {

  return(

    <HomeStack.Navigator>

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