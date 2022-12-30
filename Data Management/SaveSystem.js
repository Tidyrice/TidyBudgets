import * as fs from "react-native-fs";
import { data } from "../App";

//functions to manage how to save/load data from the local database
export function Save() {

}

export function LoadMonth(year, month) {

    const path = `${fs.DocumentDirectoryPath}/${year}-${month}.json`
    
}