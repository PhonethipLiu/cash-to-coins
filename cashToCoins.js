// Convert the dollar amount into the coins that make up that dollar amount. The final result is an object with the correct number of quarters, dimes, nickels, and pennies. That should produce the following output.
// {
//   quarters: 0,
//   dimes: 1,
//   nickels: 0,
//   pennies: 0
// }

// coinList = []
//for each denomination
//    while amountLeft < coinValue && coinLeft > 0
//        Add the coin to coinList
//        coinLeft--
 //       amountLeft -= coinValue
//if (coinList.length == 0 || amountLeft > 0)
//  return "Insufficient Funds"
//otherwise return the array


const dollarAmount = 10.17;
const piggyBank = {
    quarters: 0, 
    dimes: 0,
    nickles: 0,
    pennies: 0 
};

// function cashToCoins(dollarAmount) {
// let piggyBank = {
//     quaters: 0, 
//     dimes: 0,
//     nickles: 0,
//     pennies: 0 
// };
    
    let bank = 0;
    let num = dollarAmount;
    for (piggyBank.quarters = 0; piggyBank.quarters <= num/.25; piggyBank.quarters++) {
        for (piggyBank.dimes = 0; piggyBank.dimes <= num/.10; piggyBank.dimes++) {
            for (piggyBank.nickles = 0; piggyBank.nickles <= num/.05; piggyBank.nickles++) {
                piggyBank.pennies = num - (piggyBank.quarters * .25 + piggyBank.dimes * .10 + piggyBank.nickles * .5);
                    if (piggyBank.pennies >= 0) {
                        bank++;
                    }
                }
            }
        };

        console.log(piggyBank)
//    return piggyBank;

        
//let q = piggyBank.quarters / .25;
//let d = piggyBank.dimes / .10;
//let n = piggyBank.nickels /.05;
//let p = piggyBank.pennies /.01;

//return piggyBank;


     
// let coins = cashToCoins()    
// console.log();
