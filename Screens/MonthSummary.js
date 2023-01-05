import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, FlatList, Pressable, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import { LoadMonthAsync, SaveMonthAsync } from '../Data Management/SaveSystem';
import { ConvertMonthEnglish, FormatCurrency } from '../scripts';
import { MonthData, Spending } from '../Data Management/data';

//takes in MonthSummaryParamter object as parameter (see data.js)
export function MonthSummary( {route, navigation} ) {

    const [monthData, setMonthData] = useState({});
    const [rerender, trigger] = useState(-1); //flatList rerendering

    //load data from database
    useEffect(() => {
        LoadMonthAsync(route.params.year, route.params.month)
        .then(data => {
            setMonthData(data); //load data
        });
    }, []);

    //save data when flatlist rerenders
    useEffect(() => {
        if (rerender != -1) { //do not save on first load
            SaveMonthAsync(route.params.year, route.params.month, monthData);
        }
    }, [rerender]);

    //configure header bar
    useEffect(() => {
        navigation.setOptions({
            title: ConvertMonthEnglish(monthData.month) + " " + monthData.year,
            headerRight: () => (
                <Button
                    title = "New Spending"
                    onPress={() => {
                        trigger(0);
                        navigation.navigate("Add Spending", {
                            year: route.params.year,
                            month: route.params.month,
                            monthData: monthData,
                            trigger: trigger,
                        })
                    }}
                />
            )
        });
    }, [monthData]);

    return(

        <SafeAreaView style = {styles.container}>

            <View style = {styles.titleContainer}>
                <Text style = {styles.title}>Total Spending: {FormatCurrency(monthData.totalSpending)}</Text>
            </View>

            <FlatList
                ItemSeparatorComponent={
                    <View style = {styles.listSeparator}/>
                }
                data = {monthData.spendingArray}
                renderItem = {({item, index}) => ( //formatting for each element in FlatList
                    <Pressable
                        style = {({pressed}) => [
                            {
                                opacity: pressed
                                ? 0.5
                                : 1
                            },
                            styles.listItem
                        ]}
                        onPress = {() => {
                            Alert.alert(
                                "Delete",
                                "Remove this spending?",
                                [
                                    {text: "Cancel"},
                                    {text: "Yes", onPress: () => {
                                        monthData.removeSpending(index);
                                        trigger(rerender + 1);
                                    }}
                                ],
                                {cancelable: true}
                            );
                        }}
                    >
                
                        <View style = {{ flex: -1 }}>
                            <Text style = {styles.itemDate}>{ConvertMonthEnglish(item.date.getMonth())} {item.date.getDate()}</Text>
                            <Text style = {styles.itemVendor}>{item.vendor}</Text>
                            <Text style = {styles.itemType}>{item.type}</Text>
                        </View>
                
                        <View>
                            <Text style = {styles.itemCost}>{FormatCurrency(item.cost)}</Text>
                        </View>
            
                    </Pressable>
                )}
                extraData = {rerender} //trigger to rerender flatlist
            />

        </SafeAreaView>

    );

}

export function AddSpendingScreen( {route, navigation} ) {

    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false); //for select date button
    const [type, setType] = useState();
    const [cost, setCost] = useState();
    const [vendor, setVendor] = useState();

    return (
  
        <SafeAreaView>

            <Pressable style = {styles.datePickerButton}
                onPress = {() => setOpen(true)}
            >
                <Text style = {styles.text}>Select date: {ConvertMonthEnglish(date.getMonth())} {date.getDate()}, {date.getFullYear()}</Text>
            </Pressable>
            <DatePicker modal
                mode = "date"
                open = {open}
                date = {date}
                onConfirm = {(date) => {
                    setOpen(false)
                    setDate(date)
                }}
                onCancel = {() => {
                    setOpen(false)
                }}
                minimumDate = {new Date(route.params.year, route.params.month, 1)} //first day of the month
                maximumDate = {new Date()}
            />

            <View style = {styles.picker}>
                <Picker
                    selectedValue = {type}
                    onValueChange={(itemValue) =>
                        setType(itemValue)
                    }
                >
                    <Picker.Item color = "gray" label = "Select type..." value = {null}/>
                    <Picker.Item color = "black" label = "Food" value = "Food" />
                    <Picker.Item color = "black" label = "Housing" value = "Housing" />
                    <Picker.Item color = "black" label = "Investment" value = "Investment" />
                    <Picker.Item color = "black" label = "Insurance" value = "Insurance" />
                    <Picker.Item color = "black" label = "Medical" value = "Medical" />
                    <Picker.Item color = "black" label = "Personal" value = "Personal" />
                    <Picker.Item color = "black" label = "Recreational" value = "Recreational" />
                    <Picker.Item color = "black" label = "Transportation" value = "Transportation" />
                    <Picker.Item color = "black" label = "Misc." value = "Misc." />
                </Picker>
            </View>

            <TextInput style = {styles.textInput}
                value = {cost}
                onChangeText = {setCost}
                label = "Cost"
                placeholder = "$"
                maxLength = {8}
                keyboardType = "numeric"
                
            />

            <TextInput style = {styles.textInput}
                value = {vendor}
                onChangeText = {setVendor}
                label = "Vendor (optional)"
                maxLength = {30}
            />

            <View style = {styles.separator}/>
  
            <Pressable
                style = {({pressed}) => [
                    {
                        opacity: pressed
                        ? 0.5
                        : 1
                    },
                    styles.saveButton
                ]}
                onPress = {() => {
                    if (type == null) {
                        return Alert.alert("Error", "Please select a type.", [{text: "OK"}], {cancelable: true});
                    }
                    if (cost == null) {
                        return Alert.alert("Error", "Please input the cost.", [{text: "OK"}], {cancelable: true});
                    }
                    if (isNaN(cost) || isNaN(parseFloat(cost))) {
                        return Alert.alert("Error", "Cost should be a number.", [{text: "OK"}], {cancelable: true});
                    }
                    route.params.monthData.newSpending(new Spending(date, type, parseFloat(cost), vendor));
                    route.params.trigger(1);
                    navigation.navigate("CurrentMonth");
                }}
            >
                <Text style = {styles.text}>Save</Text>
            </Pressable>

        </SafeAreaView>
    );

}

const styles = StyleSheet.create({

    //styles for CurrentMonth screen
    container: {
        flex: 1,
        justifyContent: "center",
    },
    titleContainer: {
        padding: 20,
        backgroundColor: "white",
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
        borderTopWidth: 1,
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
        elevation: 3,
    },
    itemDate: {
        paddingBottom: 8,
        fontSize: 24,
    },
    itemVendor: {
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
    listSeparator: {
    },

    //styles for Add Spending screen
    datePickerButton: {
        backgroundColor: "#EDE3FE",
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 4,
        margin: 12,
        marginTop: 24,
        padding: 10,
        elevation: 3,
    },
    textInput: {
        backgroundColor: "#EDE3FE",
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 4,
        fontWeight: "bold",
        margin: 12,
        padding: 8,
        elevation: 3,
    },
    picker: {
        backgroundColor: "#EDE3FE",
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 4,
        margin: 12,
        padding: 8,
        elevation: 3,
    },
    saveButton: {
        backgroundColor: "#EDE3FE",
        borderColor: "gray",
        borderWidth: 2,
        borderRadius: 4,
        margin: 12,
        padding: 10,
        elevation: 3,
    },
    separator: {
        marginVertical: 12,
        marginHorizontal: 18,
        borderColor: "gray",
        borderTopWidth: 1,
    },
    text: {
        fontSize: 16,
        alignSelf: "center",
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "black",
    }

});