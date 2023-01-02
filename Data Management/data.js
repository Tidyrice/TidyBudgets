//This is passed in to the MonthSummary screen to display a specific month's spendings
export class MonthData {

    year;
    month; //string
    spendingArray; //array of spending objects sorted based on date
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
        this.spendingArray.unshift(spending);
    }

    //delete Spending Object (assume the index exists)
    removeSpending(index) {
        this.totalSpending -= this.spendingArray[index].cost;
        this.spendingArray.splice(index, 1);
    }

}

//Spending object
export class Spending {

    date; //date object
    type; //Housing, Transportation, Food, Utilities, Investment, Personal, Recreational, Insurance, Medical, Misc.
    cost;
    location; //optional

    constructor(date, type, cost, location) {
        this.date = date;
        this.type = type;
        this.cost = cost;
        this.location = location;
    }

    update(date, type, cost, location) {
        this.date = date;
        this.type = type;
        this.cost = cost;
        this.location = location;
    }

}

export class MonthSummaryParameter { //the parameter that is passed into MonthSummary

    year;
    month;

    constructor(year, month) {
        this.year = year;
        this.month = month;
    }
}

export class Profile {

    currency; //ISO 4217 currency code

}