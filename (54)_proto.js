console.log('********* 54 *********');

const person = {
    firstName: 'default',
    lastName: 'default',
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

const john = {
    firstName: 'John',
    lastName: 'Doe'
};

// never use
john.__proto__ = person;
console.log(john.getFullName());
