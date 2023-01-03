import { spliceIndex } from "../scripts";

//This is passed in to the MonthSummary screen to display a specific month's spendings
export class MonthData {

    year;
    month; //string
    spendingArray; //array of spending objects sorted based on date (recent first)
    totalSpending;

    constructor(year, month) {
        this.year = year;
        this.month = month;
        this.spendingArray = [];
        this.totalSpending = 0;
    }

    //add new Spending object sorted based on date
    newSpending(spending) {
        this.totalSpending += spending.cost;
        this.spendingArray.splice(spliceIndex(this.spendingArray, spending), 0, spending);
    }

    //delete Spending Object (assume the index exists)
    removeSpending(index) {
        this.totalSpending -= this.spendingArray[index].cost;
        this.spendingArray.splice(index, 1);
    }

}

//Spending object
export class Spending {

    date; //date object (JSON serialized)
    type; //Food, Housing, Investment, Insurance, Medical, Personal, Recreational, Transportation, Utilities, Misc.
    cost;
    vendor; //optional

    constructor(date, type, cost, vendor) {
        this.date = date.toJSON();
        this.type = type;
        this.cost = cost;
        if (vendor == null) {
            this.vendor = "- - -";
        } else {
            this.vendor = vendor;
        }
    }

    update(date, type, cost, vendor) {
        this.date = date.toJSON();
        this.type = type;
        this.cost = cost;
        if (vendor == null) {
            this.vendor = "--";
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