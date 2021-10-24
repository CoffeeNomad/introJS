/*
1.

Write a function, dogFactory(). It should:

    have 3 parameters: name, breed, and weight (in that order)
    expect name and breed to be strings
    expect weight to be a number
    return an object
    have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in

dogFactory('Joe', 'Pug', 27)
// Should return { name: 'Joe', breed: 'Pug', weight: 27 }

Checkpoint 2 Passed
2.

Add getters and setters for each of the three properties and change the property names to have an underscore prepended.
Checkpoint 3 Passed
3.

Add two methods to your object: .bark() which returns ‘ruff! ruff!’ and .eatTooManyTreats() which should increment the weight property by 1.

*/

// Write your code here:

const dogFactory = (name, breed, weight) => {
    return {
        _name: name,
        get name() {
            return this._name
        },
        set name(name) {
            this._name = name
        },
        _breed: breed,
        get breed() {
            return this._breed
        },
        set breed(breed) {
            this._breed = breed
        },
        _weight: weight,
        get weight() {
            return this._weight
        },
        set weight(weight) {
            this._weight = weight
        },
        bark() {
            return 'ruff! ruff!'
        },
        eatTooManyTreats() {
            return this._weight++
        }
    }

}

