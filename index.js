// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName() {
    var modifiedCustomerName = customerName.toUpperCase();
    customerName = modifiedCustomerName;
}
var bestCustomer;
function setBestCustomer() {
    bestCustomer = "not bob";
    return bestCustomer;
}
console.log(bestCustomer);
function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
}
const leastFavoriteCustomer = "alice";
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "hannah";
}
