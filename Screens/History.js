import { HistoryStack } from '../App';
import { MonthSummary, AddSpendingScreen } from './MonthSummary';

export default function History( {navigation} ) {

    return(

        <HistoryStack.Navigator initialRouteName = "Hisotry">

            <HistoryStack.Screen
                name = "History"
                component = {History}
            />

            <HistoryStack.Screen
                name = "Month"
                component = {MonthSummary}
            />

            <HistoryStack.Screen
                name = "Add Spending"
                component = {AddSpendingScreen}
            />

        </HistoryStack.Navigator> 
        
    );

}

function HistoryScreen({route, navigation}) {

    reutrn(

        <Text>History Screen</Text>

    )

}