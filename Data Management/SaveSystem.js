import * as fs from "react-native-fs";

//functions to manage how to save/load data from the local database
//data should be an object (JSON format)
export async function SaveMonth(year, month, data) {

    //create the storage folder
    const folderPath = `${fs.DocumentDirectoryPath}/months`
    await fs.mkdir(folderPath);

    //write file
    const path = `${fs.DocumentDirectoryPath}/months/${year}-${month}.json`

    try {
        await fs.writeFile(path, JSON.stringify(data), 'utf8');
    } catch (e) {
        console.log('error', e);
    }

}

export async function LoadMonth(year, month) { //returns null if no file present

    const path = `${fs.DocumentDirectoryPath}/months/${year}-${month}.json`

    //does the file exist?
    if (!fs.exists(path)) {
        return null;
    }

    //read file
    const data = await JSON.parse(fs.readFile(path, 'utf8'));
    return data;

}

export async function SaveProfile(data) {

}

export async function LoadProfile() {

}