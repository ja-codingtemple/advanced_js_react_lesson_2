/*
=========================================

WHAT IS A CLASS?

The term class is short for classification. 

In programming, it refers to the structure we use to design an object prior to actually creating one.
It is essentially the blueprint for an object that we have not yet made, but will make eventually.

Classes contain properties (variables inside of a class) and methods (functions inside of a class).
These things determine what data an object will hold and what behaviors and capabilities it will have.

=========================================

THE 'THIS' KEYWORD
In the context of a class, the 'this' keyword is a reference to the current instance of an object.
If you append the name of a property to it, it will refer to that object's property.

=========================================
*/

// Define a class called Character.
class Character {
    constructor(name, level, health, power) {
        this.name = name; // Set the object's name equal to the one provided via parameters.
        this.level = level; // Set the object's level equal to the one provided via parameters.
        this.health = this.health; // Set the object's health equal to the one provided via parameters.
        this.power = this.power; // Set the object's power equal to the one provided via parameters.
        this.location = "Home" // Set the object's default location to Home.
        console.log(`${this.name} has been created.`);
    }

    teleport(destination) {
        this.location = destination
        console.log(`${this.name} teleported to the ${destination}.`)
    }
}


/*
Create an object (instance) of the Character class.
In the () of Character we provide arguments (values for the required parameters)

The values of the Character's properties will be:
name: John
level: 1
health: 100
power: 100
*/
const character1 = new Character("John", 1, 100, 100);

// Call the teleport() method to make character1 travel.
character1.teleport("Dragon's Lair");

// Display character1's current location.
console.log(character1.location);

// Display character1's current location more verbosely.
console.log(`${character1.name}'s current location: ${character1.location}`);



