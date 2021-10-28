const person = {
    name: "John",
    age: 30,
    city: "New York"
};

//   document.getElementById("demo").innerHTML = 
console.log(person);


///////////////////////////Displaying Object Properties
const person1 = {
    name: "John",
    age: 30,
    city: "New York"
};

// document.getElementById("demo").innerHTML =
console.log(person1.name + "," + person1.age + "," + person1.city);


///////////////Displaying the Object in a Loop


const person2 = {
    name: "John",
    age: 30,
    city: "New York"
};

let txt = "";
for (let x in person2) {
    txt += person2[x] + " ";
};

// document.getElementById("demo").innerHTML =
console.log(txt);

////////////////////////////////////Using Object.values()

const person3 = {
    name: "John",
    age: 30,
    city: "New York"
};

const myArray = Object.values(person3);
//   document.getElementById("demo").innerHTML = 
console.log(myArray);


/////////////////Using JSON.stringify()

const person4 = {
    name: "John",
    age: 30,
    city: "New York"
};

let myString1 = JSON.stringify(person4);
//   document.getElementById("demo").innerHTML = 
console.log(myString1);

//////////////////Stringify Dates

const person5 = {
    name: "John",
    today: new Date()
};

let myString = JSON.stringify(person5);
//   document.getElementById("demo").innerHTML = 
console.log(myString);


//////////////Stringify Functions

const person6 = {
    name: "John",
    age: function () { return 30; }
};

let myString2 = JSON.stringify(person6);
//   document.getElementById("demo").innerHTML = 
console.log(myString2);


//////OR
const person7 = {
    name: "John",
    age: function () { return 30; }
};
person.age = person7.age.toString();

let myString3 = JSON.stringify(person7);
//   document.getElementById("demo").innerHTML = 
console.log(myString3);

/////////////////Stringify Arrays

const arr = ["John", "Peter", "Sally", "Jane"];

let myString4 = JSON.stringify(arr);
// document.getElementById("demo").innerHTML = 
console.log(myString4);