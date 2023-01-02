import { Picker } from '@react-native-picker/picker';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { LoadMonthAsync } from '../Data Management/SaveSystem';
import { ConvertMonthEnglish } from '../scripts';

//takes in MonthSummaryParamter object as parameter (see data.js)
export function MonthSummary( {route, navigation} ) {
    
    const [monthData, setMonthData] = useState({});

    useEffect(() => {
        LoadMonthAsync(route.params.year, route.params.month)
        .then(data => {

            setMonthData(data); //load data

            navigation.setOptions({ //configure header bar
                title: ConvertMonthEnglish(data.month) + " " + data.year,
                headerRight: () => (
                    <Button
                        title = "New Spending"
                        onPress={() => navigation.navigate("Add Spending")}
                />)
            });
            
        });
    }, []);

    return(

        <SafeAreaView style = { styles.container }>

            <View style = { styles.titleContainer }>
                <Text style = { styles.title }>Total Spending: ${monthData.totalSpending}</Text>
            </View>

            <FlatList
                data = {monthData.spendingArray}
                renderItem = {renderItem}
            />

        </SafeAreaView>

    );

}

export function AddSpendingScreen( {navigation} ) {

    const [cost, setCost] = useState();
    const [type, setType] = useState();
    const [vendor, setVendor] = useState();

    return (
  
        <SafeAreaView>

            <TextInput style = { styles.textInput }
                value = { cost }
                onChangeText = { setCost }
                label = "Cost"
                placeholder = "$"
                maxLength = {9}
                keyboardType = "numeric"
                
            />

            <TextInput style = { styles.textInput }
                value = { vendor }
                onChangeText = { setVendor }
                label = "Vendor (optional)"
                maxLength = {30}
            />

            <Picker style = { styles.textInput }
                selectedValue = { type }
                onValueChange={(itemValue) =>
                    setType(itemValue)
                }
                //mode = "dropdown"
                >
                <Picker.Item label = "Food" value = "java" />
                <Picker.Item label = "Housing" value = "js" />
            </Picker>

            <Button
                title = "Add"
                onPress={() => {
                    navigation.navigate("CurrentMonth")
                }}
            />

        </SafeAreaView>
  
    );

}

//formatting for each element in FlatList
const renderItem = ({ item }) => (
    <View style = { styles.listItem }>

        <View style = {{ flex: -1 }}>
            <Text style = { styles.itemDate }>{ ConvertMonthEnglish(item.date.getMonth()) } { item.date.getDate() }</Text>
            <Text style = { styles.itemLocation }>{ item.location }</Text>
            <Text style = { styles.itemType }>{ item.type }</Text>
        </View>

        <View>
            <Text style = { styles.itemCost }>${ item.cost }</Text>
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
    textInput: {
        borderWidth: 1,
        margin: 12,
        padding: 10,
    },

});