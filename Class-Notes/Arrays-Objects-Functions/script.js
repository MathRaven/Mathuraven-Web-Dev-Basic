console.log("JavaScript is running...")

// let mixArray = [10, "A string", [2, 3, 4], {myKey: "myValue"}, true];

// console.log(mixArray[0]); // Returns the element at index 0 from the array

// mixArray.push("Dinosaur"); // the Array.push() method will append a new element ot the array

// console.log(mixArray);

// console.log(mixArray.slice(0, 3)) // Slice will allow you to return a portion of the array

// mixArray.pop(); // Removes the last element in the array

// console.log(mixArray);

// mixArray.shift(); // Removes the first element in the array

// console.log(mixArray);

// mixArray.unshift(200); // Adds a new element at the beginning of the array

// console.log(mixArray);

// console.log(mixArray.length); // Returns the length of the array

// console.log(mixArray [mixArray.length - 1]); // Will return the last element in the array

// console.log(mixArray.reverse()); // Revereses the order of the elements in the array

// console.log(mixArray);

// let copyOfMixedArray = [...mixArray]; // The spread (...) will copy with contents of an iterable object


// let car = {
//     type: "Supercar", // type => Key, Supercar -> Value
//     brand: "Bugatti", // These are Key-Value paris
//     year: 2016,
//     color: "White",
//     subCar: {color: "red"},
//     numsArray: [1, 2, 3],
//     greeting: () => console.log("Hello world"),
//     updateColor: (colorArg) => (this.color = colorArg),
// };

// // let key = "type";
// // console.log(car["type"])
// // console.log(car[key])
// // console.log(car.type)
// // console.log(car.subCar.color)
// // console.log(car["subCar"]["color"])

// console.log(Object.keys(car)); // Return an array of all the keys in the object car

// console.log(Object.values(car)); // Returns an array of all the values

// console.log(Object.entries(car)); // Returns an array of arrays, which gives both the key and value for each entry

// car.greeting() // Will invoke the greeting method from the car object

//-------------------Functions---------------------------

// Function Declaration
// Create a function that will take two numbers as inputs and return the sum of the nums

// function sum(a, b) {
//     // a and b are our inputs
//     //debugger;
//     console.log(a + b);
//     let sum = a + b;
//     return sum; // returns the value of a + b
// }

// let sumOfFourAndTwo = sum(4, 2);

// console.log(sumOfFourAndTwo + 10)

function vendingMachine() {
    // Inventory of snacks and drinks
    let inventory = {
        S1: {item: 'Coca-Cola', count: 5},
        C1: {item: 'Ruffles', count: 3},
        S2: {item: 'Pepsi', count: 4},
        C2: {item: 'Doritos', count: 25}
    };

    //Function to check and dispense item from machine
    function dispenseItem(code, callBackFn) {
        // Check if inventory inlcudes requested item
        if (inventory[code] && inventory[code].count > 0) {
            inventory[code].count--; // Subtract 1 from the count
            // Dispense Item
            callBackFn()
        } else {
            callBackFn()
        }
    }
    
    return {
        selectItem: function (code, callback) {
            dispenseItem(code, callback);
        },
        inventoryStatus: function () {
            return inventory;
        }
    }
}

function handleResponse(err, result) {
    if (err) {
        console.log(err);
    }
    console.log(result);
}

const machine = vendingMachine();
console.log(machine);

machine.selectItem('S1', handleResponse)