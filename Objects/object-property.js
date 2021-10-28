//  objectName.property      // person.age
//  objectName["property"]   // person["age"]
//  objectName[expression]   // x = "age"; person[x]

const person = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
};

// document.getElementById("demo").innerHTML = 

console.log(person.firstname + " is " + person.age + " years old.");

// document.getElementById("demo").innerHTML = 

console.log(person["firstname"] + " is " + person["age"] + " years old.");

const myObj = {
    name: "John",
    age: 30,
    cars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
}
//   document.getElementById("demo").innerHTML =


////////option 1
console.log(myObj["cars"]["car2"]);

////////////option 2
console.log(myObj.cars["car2"]);

//////////option 3
console.log(myObj.cars.car2);

///////////////option4

let p1 = "cars";
let p2 = "car2";

// document.getElementById("demo").innerHTML =
console.log(myObj[p1][p2]);



////////nested arrays and objects

let x = "";
const myObj2 = {
    name: "John",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ]
}

for (let i in myObj2.cars) {
    x += "<h2>" + myObj2.cars[i].name + "</h2>";
    for (let j in myObj2.cars[i].models) {
        x += myObj2.cars[i].models[j] + "<br>";
    }
}

// document.getElementById("demo").innerHTML = 
console.log(x);
