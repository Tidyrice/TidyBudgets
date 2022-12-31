//This is passed in to the MonthSummary screen to display a specific month's spendings
export class monthData {

    month; //string
    spendingArray; //array of spending objects sorted based on date

}

//Spending object
export class spending {

    date; //date object
    type; //Housing, Transportation, Food, Utilities, Investment, Personal, Recreational, Insurance, Medical, Misc.
    cost;
    location; //optional

}

export class profile {

    currency; //ISO 4217 currency code

}