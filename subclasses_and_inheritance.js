/*
SUBCLASSES, INHERITANCE, AND SUPER()
=========================================

WHAT IS A SUBCLASS?
A subclass is a class that inherits the properties and methods of another class, which would be its parent class, otherwise known as a superclass.

WHAT IS INHERITANCE?
Inheritance is the concept of allowing one class to inherit the properties and methods of another.

CREATING A SUBCLASS / UTILIZING INHERITANCE:
To create a subclass, we must use the 'extends' keyword.

WHAT IS SUPER()?
super() is a function used to call the constructor function of the parent class / superclass.

=========================================
*/

// Define the parent class (superclass)
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

// Define the subclass 'Peasant' (extend the parent/superclass)
class Beggar extends Character {
    // Require the provision of a value for the 'name' property to create a Fighter.
    constructor(name) {
        // Pass default stats to the parent/subclass. Set the level of all peasants to 1, health to 10, and power to 0.
        super(name, 1, 10, 0);
    }

    beg(target) {
        console.log(`${this.name} begs ${target.name} for some spare change.`);
    }
}

// Define the subclass 'Enforcer' (extend the parent/superclass)
class Enforcer extends Character {
    // Require the provision of values for the 'name' and 'level' properties to create a Fighter. 
    constructor(name, level) {
        // Pass values to the constructor of the parent / super class.
        // NOTE: We are hardcoding the values for health & power to ensure all Fighters have a specific base health & power amount.
        super(name, level, 150, 200); 
    }

    imprison(opponent) {
        opponent.location = "Prison";
        console.log(`${this.name} has imprisoned ${opponent.name}.`);
        console.log(`${opponent.name}'s current location: ${opponent.location}.`);
    }
}

// Create a Beggar named "Joe" who is level 1 with 50 health and 0 power.
beggar = new Beggar("Joe", 1, 50, 0);

// Create an Enforcer named "Pavel" who is level 60. We are not defining health & power because those values are set by default in the subclass.
enforcer = new Enforcer("Pavel", 60);

// Cause the beggar to beg the enforcer for some money.
beggar.beg(enforcer);

// Cause 'enforcer' to imprison 'beggar'
enforcer.imprison(beggar);