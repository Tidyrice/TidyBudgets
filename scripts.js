export function CurrentYear() {

    const date = new Date();
    return date.getFullYear();

}

export function CurrentMonth() { //returns 0-11 (January -> 0, December -> 11)

    const date = new Date();
    return date.getMonth();

}

export function CurrentMonthEnglish() {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date();
    return months[date.getMonth()];

}

export function ConvertMonthEnglish(month) {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month];

}

import 'intl';
import 'intl/locale-data/jsonp/en-US';
export function FormatCurrency(cost) {

    const currency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return currency.format(cost);

}

export function spliceIndex(spendingArray, spending) { //for MonthData.newSpending()

    if (spendingArray.length == 0)
        return 0;

    const targetDate = new Date(spending.date);

    let low = 0;
    let high = spendingArray.length;

    while (low < high) {
        var mid = Math.floor((low + high) / 2);
        if (new Date(spendingArray[mid].date) > targetDate) {
            low = mid + 1;
        }
        else high = mid;
    }

    return low;

}