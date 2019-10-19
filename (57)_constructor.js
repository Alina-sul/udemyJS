console.log('********* 57 *********');

function Person(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const alina = new Person('Alina','Sul');

Person.prototype.getFullName = function () {
    console.log(this.firstName,this.lastName);
}

alina.getFullName();

