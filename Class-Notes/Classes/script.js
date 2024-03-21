console.log("Script running")

class Car {
    constructor(makeArg, modelArg, yearArg) { 
        // Every class usually has a constructor
        this.make = makeArg; // this.make refers to the objects own 'make' property
        this.model = modelArg; // 'this' refers to the instance of the object itself after/while it is instantiated
        this.year = yearArg;
    }
}