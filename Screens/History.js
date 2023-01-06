import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MonthSummary, AddSpendingScreen } from './MonthSummary';
import { Text } from 'react-native'
import { LoadHistoryAsync } from '../Data Management/SaveSystem';
import { useEffect, useState } from 'react';

const HistoryStack = createNativeStackNavigator();

export default function HistoryStackScreen() {

    return(

        <HistoryStack.Navigator initialRouteName = "Hisotry">

            <HistoryStack.Screen
                name = "History"
                component = {ListHistory}
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

function ListHistory({route, navigation}) {

    const [monthHistory, setMonthHistory] = useState({});

    //load data from database
    useEffect(() => {
        LoadHistoryAsync()
        .then(data => {
            console.log(data);
            setMonthHistory(data); //load data
        });
    }, []);

    return(

        <Text>History Screen</Text>

    )

}