export function CurrentMonth() {

    const date = new Date();
    return date.getMonth();

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