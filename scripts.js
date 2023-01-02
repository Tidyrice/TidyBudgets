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