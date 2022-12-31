import { StyleSheet, Text, View, SafeAreaView, Button, FlatList, StatusBar, TouchableOpacity } from 'react-native';
//import { SaveMonth, LoadMonth } from '../Data Management/SaveSystem';
import { CurrentMonth, CurrentMonthEnglish, CurrentYear } from '../scripts';

//takes in parameter month (string) and spending (array of spending objects)
export function MonthSummary( {navigation} ) {

    /*let data = LoadMonth();

    if (data == null) {

    }*/

    navigation.setOptions({ 
        headerTitle: CurrentMonthEnglish() + " " + CurrentYear(),
        headerRight: () => (
            <Button
                title = "New Spending"
                onPress={() => navigation.navigate('Add')}
        />)
    });

    return(

        <SafeAreaView style = { styles.container }>

            <View style = { styles.titleContainer }>
                <Text style = { styles.title }>Total Spending: $420.69</Text>
            </View>

            <FlatList
                data = {DATA}
                renderItem = {renderItem}
            />

        </SafeAreaView>

    );

}

export function AddSpendingScreen() {
    return (
  
      <Text>ADD SPENDING SCREEN!</Text>
  
    )
}

const DATA = [ //SILLY DATA FOR DEBUGGING PURPOSES
    {
        title: "Nov. 28",
        type: "Food",
        cost: "$5.00",
        location: "Lazzez",
    },
    {
        title: "Nov. 21",
        type: "Transportation",
        cost: "$270.00",
        location: "Edmonton Public Libraries",
    },
    {
        title: "Nov. 20",
        type: "--",
        cost: "$5.00",
        location: "Lazeez",
    },
    {
        title: "Nov. 17",
        type: "Food",
        cost: "$5.00",
        location: "Lazeez",
    },
    {
        title: "Nov. 13",
        type: "Food",
        cost: "$5.00",
        location: "Lazeez",
    },
    {
        title: "Nov. 1",
        type: "Food",
        cost: "$5.00",
        location: "Lazeez",
    },
];

const renderItem = ({ item }) => (
    <View style = { styles.listItem }>

        <View style = {{ flex: -1 }}>
            <Text style = { styles.itemDate }>{ item.title }</Text>
            <Text style = { styles.itemLocation }>{ item.location }</Text>
            <Text style = { styles.itemType }>{ item.type }</Text>
        </View>

        <View>
            <Text style = { styles.itemCost }>{ item.cost }</Text>
        </View>

    </View>
);

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
    },
    titleContainer: {
        padding: 20,
        backgroundColor: "white",
        shadowColor: "black",
        elevation: 10,
    },
    title: {
        paddingVertical: 4,
        fontSize: 28,
        fontWeight: "bold",
    },
    listItem: { //card for each list element
        backgroundColor: "#BFDFFF",
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
        marginTop: 10,
        marginHorizontal: 12,
    },
    itemDate: {
        paddingBottom: 8,
        fontSize: 24,
    },
    itemLocation: {
        paddingBottom: 8,
        fontSize: 18,
    },
    itemType: {
        fontStyle: "italic",
        fontSize: 18,
    },
    itemCost: {
        alignSelf: "flex-end",
        paddingLeft: 8,
        fontSize: 28,
    },

});