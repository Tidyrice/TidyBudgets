import * as fs from 'expo-file-system'
import { MonthData } from './data';

//functions to manage how to save/load data from the local database
//data should be an object (JSON format)
export async function SaveMonth(year, month, data) {

    //create the storage folder
    const folderPath = fs.documentDirectory + "months";
    await fs.makeDirectoryAsync(folderPath);

    //write file
    const path = folderPath + `/${year}-${month}.json`;


    try {
        await fs.writeAsStringAsync(path, JSON.stringify(data), 'utf8');
    } catch (e) {
        console.log('error', e);
    }

}

export async function LoadMonth(year, month) { //returns default MonthData object if no file present

    const path = fs.documentDirectory + `months/${year}-${month}.json`

    //does the file exist?
    if (!(await fs.getInfoAsync(path)).exists) {
        return new MonthData;
    }

    //read file
    const data = await JSON.parse(fs.readAsStringAsync(path, 'utf8'));
    return data;

}

export async function SaveProfile(data) {

}

export async function LoadProfile() {

}