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


const dollarAmount = 10.17; // or plug in 10.42 to test 2nd value
const piggyBank = {
    quarters: 0, 
    dimes: 0,
    nickles: 0,
    pennies: 0 
};


// Take dollarAmount (10.17) and separate whole dollar amount and change (return should be 10 and .17) 
//==== how would I parse out the 2 numbers before the decimal and 2 numbers after?
// let q = dollarAmount / 1.00; (10 /1.00 == 10)
// let change = .17;
// return sum (add whole dollarAmount(10)/.25 to piggyBank.quarters (should be 40), then add the remaining balance to a variable named change = .17 and break that amount down to dimes:1, nickles:1 & pennies: 2
// let dollar = Math.floor(dollarAmount) //10.17
// Math.floor(x) returns the value of x rounded down to its nearest integer: === return value should be 10 
// let change = dollarAmount - dollar// 10.17 - 10 === .17
// let sortChange = change /.17/ - .25 !== positive number interger then move on to test the condition for dimes
// let d = change /.17/ - .10 //returns .07
//{ if (d < .10; d++ } then continue to subtract .10 from the change and add it to piggyBank.dimes count// d - .10 += piggyBank.dimes++;} === do we need a changeCount variable to keep track of the change value?
// else if { let n = change - .05; { if (n < .05; d++){ piggyBank.nickles ++;} else if { let p = change - .01;{ if ( p < .01; p++){ piggyBank.pennies++;} else { if(change === 0;){ console.log(piggyBank; } } } };
// piggyBank();


let num = dollarAmount;
for (let num in dollarAmount){
    num/25
}
 
    for (let q = 0; q <= num/.25; piggyBank.quarters++) {
        for (piggyBank.dimes = 0; piggyBank.dimes <= num/.10; piggyBank.dimes++) {
            for (piggyBank.nickles = 0; piggyBank.nickles <= num/.05; piggyBank.nickles++) {
                piggyBank.pennies = num - (piggyBank.quarters * .25 + piggyBank.dimes * .10 + piggyBank.nickles * .05);
                    if (num >= 0) {
                        bank++;
                    }
                }
            }
        };
 console.log(piggyBank)


// ============== loop
// let bank = 0;
// let num = dollarAmount;
// for (piggyBank.quarters = 0; piggyBank.quarters <= num/25; piggyBank.quarters++) {
//     for (piggyBank.dimes = 0; piggyBank.dimes <= num/10; piggyBank.dimes++) {
//         for (piggyBank.nickles = 0; piggyBank.nickles <= num/5; piggyBank.nickles++) {
//             piggyBank.pennies = num - (piggyBank.quarters * 25 + piggyBank.dimes * 10 + piggyBank.nickles * 5);
//                 if (num >= 0) {
//                     bank++;
//                 }
//             }
//         }
//     };

//     console.log(piggyBank)

//================================

//    return piggyBank;

//let q = piggyBank.quarters / .25;
//let d = piggyBank.dimes / .10;
//let n = piggyBank.nickels /.05;
//let p = piggyBank.pennies /.01;

//return piggyBank;
     
// let coins = cashToCoins()    
// console.log();
