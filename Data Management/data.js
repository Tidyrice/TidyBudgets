import { spliceIndex } from "../scripts";
import { SaveMonthAsync } from "./SaveSystem";

//This is passed in to the MonthSummary screen to display a specific month's spendings
export class MonthData {

    year;
    month; //string
    spendingArray; //array of spending objects sorted based on date (recent first)
    totalSpending; //float

    constructor(year, month, spendingArray, totalSpending) {
        this.year = year;
        this.month = month;
        this.spendingArray = spendingArray.map(obj => new Spending(obj.date, obj.type, obj.cost, obj.vendor)); //maps the generic objects to Spending objects
        this.totalSpending = totalSpending;
    }

    //add new Spending object sorted based on date
    newSpending(spending) {
        this.totalSpending += spending.cost;
        this.spendingArray.splice(spliceIndex(this.spendingArray, spending), 0, spending);
        SaveMonthAsync(this.year, this.month, this);
    }

    //delete Spending Object (assume the index exists)
    removeSpending(index) {
        this.totalSpending -= this.spendingArray[index].cost;
        this.spendingArray.splice(index, 1);
        SaveMonthAsync(this.year, this.month, this);
    }

}

//Spending object
export class Spending {

    date; //date object
    type; //Food, Housing, Investment, Insurance, Medical, Personal, Recreational, Transportation, Misc.
    cost; //float
    vendor; //optional

    constructor(date, type, cost, vendor) {
        this.date = new Date(date);
        this.type = type;
        this.cost = cost;
        if (vendor == null) {
            this.vendor = "- - -";
        } else {
            this.vendor = vendor;
        }
    }

}

export class MonthSummaryParameter { //the parameter that is passed into MonthSummary

    year;
    month;

    constructor(year, month, updatedData) {
        this.year = year;
        this.month = month;
    }
}

export class Profile {

    currency; //ISO 4217 currency code

}