export function CurrentMonth() { //returns 1-12 (January -> 1, December -> 12)

    const date = new Date();
    return date.getMonth() + 1;

}

export function CurrentMonthEnglish() {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date();
    return months[date.getMonth()];

}

export function CurrentYear() {

    const date = new Date();
    return date.getFullYear();

}