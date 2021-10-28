// objectName.methodName()
//////////////////////////////////////Accessing Object Methods
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

//   document.getElementById("demo").innerHTML = 
console.log(person.fullName);

// 



// ////////////////////////////////Adding a Method to an Object
const person1 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
};
person1.name = function () {
    return this.firstName + " " + this.lastName;
};

//   document.getElementById("demo").innerHTML =

console.log("My father is " + person1.name());



//////////////////Using Built-In Methods
const person2 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
};
person2.name = function () {
    return (this.firstName + " " + this.lastName).toUpperCase();
};

// document.getElementById("demo").innerHTML =
console.log("My father is " + person2.name());