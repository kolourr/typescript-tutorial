"use strict";
//Basic Types 
let id = 5;
let company = 'Bruce World';
let isPublished = true;
let x = 'Hello';
let age;
let ids = [1, 2, 3, 4, 5]; //An array that can only contain numbers 
//ids.push('Hello') wont work 
let arr = [1, true, 'Hello'];
//Tuple 
let person = [1, 'Bruce', true];
//let person: [number, string, boolean] =  [1, 'Bruce', 1] will not work 
//Tuple Array 
let employee;
employee = [
    [1, 'Bruce'],
    [2, 'John']
];
//Unions 
let newId = 22;
newId = '22';
//Enum 
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
console.log(Direction1.Left);
const user = {
    id: 1,
    name: 'John'
};
//Type Assetion 
let cid = 1;
// let customerId = <number>cid (This works as well as the one below)
let customerId = cid;
//Functions 
//Each argument that gets passed in as well as the return must be labelled 
function addNum(x, y) {
    return x + y;
}
//No return value 
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John'
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//Classes 
//private lets you only access the property from within the class 
//proteted - can only be acccesed from this class or anything that is extended from this class 
// private id: number - protected name: string
//Can also use interfaces to map out what your class is 
class Person {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const bruce = new Person(1, 'Bruce');
console.log(bruce);
console.log(bruce.register());
//Extending the class - sub class 
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.positon = position;
    }
}
const emp = new Employee(3, 'John', 'Developer');
console.log(emp.name);
console.log(emp.register());
//Generics <T> is the type 
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Bruce', 'Jon', 'Jill']);
// numArray.push('hello') //this will not work 
// any would have allowed that. Generic was used as a placeholder for the type 
// This helps us create reusable components 
