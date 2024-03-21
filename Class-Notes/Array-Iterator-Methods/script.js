console.log("script is running")

// let nums = [1, 2, 3, 4, 5]

// for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i]);
// }

//Array iterator methods will iterate over every element in the array and perform
// whichever operation you instruct it to do

// let lettersList = ['a', 'b', 'c', 'd', 'e']

// lettersList.forEach((letter, indexOfLetter, wholeLetterList) => {
//     console.log(`The element at index ${indexOfLetter} is ${letter}`)
// })

// // console.log(nums);

const expenses = [
    { name: "Alice", amount: 45.75},
    { name: "Bob", amount: 60.0},
    { name: "Charlie", amount: 35.5},
    { name: "Dave", amount: 50.0},
    { name: "Eve", amount: 41.25}
]

// expenses.forEach(function (expense) {
//     console.log(`${expense.name}: ${expense.amount}`);
// })

//map: Convert each expense to a different currency
// const exchangeRate = 0.68;
// const expenseInEuros = expenses.map((expense => {
//     return {
//         name: expense.name,
//         amount: expense.amount * exchangeRate
//     }
// }))
// console.log(expenseInEuros)


// //filter: find expense more than $50
// const highExpenses = expense.filer()

// reduce: Calculate total expenses
// const totalExpenses = expenses.reduce(

// )

// find: Find the first person who's expense is exactly 50
// const exactExpense = expenses.find((expense) => expense.amount == 50);
// console.log(exactExpense)

// some: Check if any expense is above $100
// const hasLargeExpense = expenses.some(function (expense) {
//     return expense.amount > 100;
// })
// console.log(hasLargeExpense)

// every: Check if all the expense are below 100 (opposite of some)
// const allBelowHundred = expenses.every(ex => ex.amount < 100);
// console.log(allBelowHundred)

const sortedExpense = expenses.sort((a, b) => a.amount - b.amount);
console.log(sortedExpense)