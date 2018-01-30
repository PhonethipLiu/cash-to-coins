// Convert the dollar amount into the coins that make up that dollar amount. The final result is an object with the correct number of quarters, dimes, nickels, and pennies. That should produce the following output.
// {
//   quarters: 0,
//   dimes: 1,
//   nickels: 0,
//   pennies: 0
// }

const dollarAmount = 10.17;
const piggyBank = {
    quaters: 0, 
    dimes: 0,
    nickles: 0,
    pennies: 0 
};

function covertCashToCoins(dollarAmount) {
for (piggyBank)
let p = piggyBank.pennies /.01;
let n = piggyBank.nickels /.05;
let d = piggyBank.dimes / .10;
let q = piggyBank.quarters / .25;

dollarAmount = p + n + d + q;
};
console.log(piggyBank)