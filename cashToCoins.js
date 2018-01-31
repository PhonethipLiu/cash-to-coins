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
    quaters: 0, 
    dimes: 0,
    nickles: 0,
    pennies: 0 
};

function cashToCoins(dollarAmount) {
let piggyBank = {
    quaters: 0, 
    dimes: 0,
    nickles: 0,
    pennies: 0 
};
    
    piggyBank = 0;
    for (piggyBank q = 0; q <= x /.25; q++) {
        for (piggyBank d = 0; d <= x /.10; d++) {
            for (piggyBank n = 0; n <= x /.05; n++) {
                for (piggyBank p = 0; p <= x /.01; p++) {
                    piggyBank i = q * .25 + d * 10 + n * 5 + p;
                    if (i == x) {
                        piggyBank++;
                    } else if (i > n) {
                        break;
                    }
                }
            }
        }
    }
    return piggyBank;
}
        
//let q = piggyBank.quarters / .25;
//let d = piggyBank.dimes / .10;
//let n = piggyBank.nickels /.05;
//let p = piggyBank.pennies /.01;

//return piggyBank;

}; 
     
let coins = cashToCoins()    
console.log();
