import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';

//takes in parameter month (string) and spending (array of spending objects)
export function MonthSummary( {navigation} ) {

    navigation.setOptions({ title: 'November 2022' });

    return(

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
            title = "Add Spending"
            onPress={() => navigation.navigate('Add')}
        />
        </View>

    );

}

export function AddSpendingScreen() {
    return (
  
      <Text>ADD SPENDING SCREEN!</Text>
  
    )
  }