// Convert the dollar amount into the coins that make up that dollar amount. The final result is an object with the correct number of quarters, dimes, nickels, and pennies. That should produce the following output.
// {
//   quarters: 0,
//   dimes: 1,
//   nickels: 0,
//   pennies: 0
// }

const dollarAmount = 10.19; // or plug in 10.42 to test 2nd value
const piggyBank = {};

// Take dollarAmount (10.19) and multiply by 100 to get rid of the decimal
//console.log(dollarAmount * 100); // testing the math
let totalCoins = dollarAmount * 100;
console.log(totalCoins);

// ============ working solutions ==============
//Now that we have a total coin amount we want to sort the coins

// The remainder operator returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend, not the divisor. It uses a built-in modulo function to produce the result, which is the integer remainder of dividing var1 by var2 

// console.log(1019 % 5); // test the modulus operator

// ========= sortChange(totalCoins) =============

// for quarters = 1019 / 25 = 40.76 math.floor rounds down to 40
piggyBank.quarters = Math.floor(totalCoins / 25);

// 1019 % 25 = 19 / 10 = 1.9 math.floor rounds down to 1
piggyBank.dimes = Math.floor((totalCoins % 25) / 10);

// 1019 % 10 = 9 / 5 = 1.8 math.floor rounds down to 1
piggyBank.nickels = Math.floor((totalCoins % 10) / 5);

// 1019 % 5 = 4 / 1 = 4 math.floor rounds down to 4
piggyBank.pennies = Math.floor((totalCoins % 5) / 1);
    
console.log(piggyBank);


// ============ end working solutions ==============

//let q = piggyBank.quarters / 25;
//let d = piggyBank.dimes / 10;
//let n = piggyBank.nickels / 5;
//let p = piggyBank.pennies / 1;

//return piggyBank;
     
