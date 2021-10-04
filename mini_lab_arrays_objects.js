
// Task 1 - Arrays
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 1. Print out each number in the array
console.log(numbers);
// 2. Print out the sum of all of the numbers added together
var totalOfArray = (previousValue, currentValue) => previousValue + currentValue;
console.log(numbers.reduce(totalOfArray));

// 3. Print out only the even numbers

var printEvenNumbers = numbers.filter(number => number % 2 ==0);
console.log(printEvenNumbers);

// 4. Print out only the odd numbers
var printOddNumbers = numbers.filter(number => number % 2 == 1);
console.log(printOddNumbers);

// 5. Print out the sum of only the even numbers
var evenNumbers = numbers.filter(number => number % 2 == 0);
var sumOfEvenNumbers = (previousValue, currentValue) => previousValue + currentValue;
console.log(evenNumbers.reduce(sumOfEvenNumbers));

// 6. Using a long-form for loop, print out each number in the array starting from the end
for (var i = 9; i > 0; i--){
    var currentNumber = numbers[i];
    console.log(currentNumber);
}


// Task 2 - Objects
var bankAccounts = [
  {
    accountHolder: 'Athos',
    type: 'Business',
    balance: 1234,
  },
  {
    accountHolder: 'Porthos',
    type: 'Personal',
    balance: 432,
  },
  {
    accountHolder: 'Aramis',
    type: 'Personal',
    balance: 23,
  },
];
// 1. Find the account with the highest balance

var highestBalance = 0
var name = ""
for (var account of bankAccounts) {
    if (account.balance > highestBalance) {
        highestBalance = account.balance
        name = account.accountHolder
    };  
}

console.log(`The account under the name ${name} has the highest balance of ${highestBalance}.`);

// 2. Find all of the personal accounts

var personalAccounts = []
for (var account of bankAccounts){
    if (account.type == 'Personal'){
        personalAccounts.push(account.accountHolder)
    };
}
console.log(personalAccounts);

// 3. Calculate the sum of the balance of all personal accounts
var personalAccounts = []
for (var account of bankAccounts){
    if (account.type == 'Personal'){
        personalAccounts.push(account.balance)
    };
}
var totalOfPersonal = (previousValue, currentValue) => previousValue + currentValue;
console.log(personalAccounts.reduce(totalOfPersonal));

// 4. Add 10% interest to the balance of all business accounts
for (var account of bankAccounts){
    if (account.type == 'Business'){
        newBalance = (account.balance)*1.01
    };
}
console.log(newBalance);

// HARD
// 5. Using a loop, create an object detailing how many of each account type there are.
// Your goal is to create the following object -> { Business: 1, Personal: 2 } 

typeOfAccount = {
    Business : 0,
    Personal : 0
};

for (var account of bankAccounts){
    if (account.type == 'Business'){
        typeOfAccount.Business++
    } else{
        typeOfAccount.Personal++
    };
}
console.log(typeOfAccount);

