/*
WHAT TYPES OF OBJECTS ARE THERE?
- Instance Objects
- Plain Objects
- JSON

WHAT ARE INSTANCE OBJECTS?
Instance objects are instances of a class.
They contain properties and methods.

WHAT ARE PLAIN OBJECTS?
Plain objects are simple objects created using {} or Object().
They store data in the form of key-value pairs and lack any sophisticated structure beyond their key-value arrangement of data.
They technically do not have methods, although you -can- store functions inside of them as a property.
Bear in mind, the term 'method' is usually a reference to a function that exists inside the context of a class.

WHAT IS JSON?
JSON stands for JavaScript Object Notation. It is a string format commonly used when sending data.
JSON is not executable code.
JSON does not contain methods.
*/


/*
=========================================
INSTANCE OBJECT (EXAMPLE)
=========================================
*/
console.log("\nINSTANCE OBJECT EXAMPLE:");

// Create the class.
class Dog {
    constructor(name, breed, furColor) {
        this.name = name;
        this.breed = breed;
        this.furColor = furColor;
        this.location = "Home";
        console.log(`${this.name} has been created.`);
    }

    walk(destination) {
        this.location = destination;
        console.log(`${this.name} walks to the ${destination}.`);
        console.log(`${this.name}'s current location: ${this.location}`);
    }

    bark(target) {
        console.log(`${this.name} barks at ${target}.`);
    }
}

// Create the instance object.
const perfect_puppy = new Dog("Opal", "Teacup Schnauzer", "Black");

// Call some of the instance object's methods.
perfect_puppy.walk("Dog Park");
perfect_puppy.bark("the other dogs");

/*
=========================================
PLAIN OBJECT (EXAMPLE)
=========================================
*/
console.log("\nPLAIN OBJECT EXAMPLE:");

const dog = {
    name: "Shadow",
    age: 9,
    eat(food) {
        console.log(`${this.name} eats ${food}.`);
    }
};

console.log(Object.keys(dog)); // Print the object's keys.
console.log(Object.values(dog)); // Print the object's values.
console.log(Object.entries(dog)); // Print the object's key-value pairs together.

// Print out an individual property.
console.log(dog.name);
// Call the eat() function. (This is stored as a property.)
dog.eat("chicken");

/*
=========================================
JSON (EXAMPLE)
=========================================
*/
console.log("\nJSON (JavaScript Object Notation) EXAMPLE:")

// Create a plain JavaScript object.
const customer = {
    "name": "Marcus Aurelius LXXV",
    "age": "30"
};

// Convert the object to a JSON string.
const customerJSON = JSON.stringify(customer);

// Print out the JSON string.
console.log(customerJSON);