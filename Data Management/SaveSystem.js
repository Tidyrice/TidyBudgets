import * as fs from 'expo-file-system'
import { MonthData } from './data';

//functions to manage how to save/load data from the local database
//data should be an object (JSON serializable)

export async function SaveMonthAsync(year, month, data) { //data is a MonthData object

    //create the storage folder
    const folderPath = fs.documentDirectory + "months";
    if (!(await fs.getInfoAsync(folderPath)).exists) {
        await fs.makeDirectoryAsync(folderPath);
    }

    //write file
    const path = folderPath + `/${year}-${month}.json`;

    try {
        await fs.writeAsStringAsync(path, JSON.stringify(data));
    } catch (e) {
        console.log('error', e);
    }

}

export async function LoadMonthAsync(year, month) { //returns default MonthData object if no file present

    const path = fs.documentDirectory + `months/${year}-${month}.json`

    //does the file exist?
    if (!(await fs.getInfoAsync(path)).exists) {
        
        const empty = new MonthData(year, month, [], 0);
        return empty;

    }

    //read file
    const data = JSON.parse(await fs.readAsStringAsync(path));
    return new MonthData(data.year, data.month, data.spendingArray, data.totalSpending);

}

export async function LoadHistoryAsync() {
    
}

export async function SaveProfileAsync(data) {

}

export async function LoadProfileAsync() {

}