import { StyleSheet, Text, View, SafeAreaView, Button, FlatList, StatusBar, TouchableOpacity } from 'react-native';

const DATA = [
    {
      title: "Nov. 28",
      price: "$5.00"
    },
    {
      title: "Nov. 21",
      price: "$5.00"
    },
    {
      title: "Nov. 20",
      price: "$5.00"
    },
    {
        title: "Nov. 17",
        price: "$5.00"
    },
    {
        title: "Nov. 13",
        price: "$5.00"
    },
    {
        title: "Nov. 1",
        price: "$5.00"
    },
];

const renderItem = ({ item }) => (
    <View style={styles.listItem}>
        <Text style={styles.listTitle}>{item.title}</Text>
        <Text>{item.price}</Text>
    </View>
);

//takes in parameter month (string) and spending (array of spending objects)
export function MonthSummary( {navigation} ) {

    navigation.setOptions({ 
        headerTitle: 'November 2022',
        headerRight: () => (
            <Button
                title = "New Spending"
                onPress={() => navigation.navigate('Add')}
        />)
    });

    return(

        <SafeAreaView style={ styles.container }>

            <Text style={ styles.title }>Total Spending: $169,420.69</Text>

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

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
    },
    title: {
        padding: 20,
        marginVertical: 8,
        fontSize: 28,
        fontWeight: "bold",
    },
    listItem: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 12,
    },
    listTitle: {
        fontSize: 26,
    },

});