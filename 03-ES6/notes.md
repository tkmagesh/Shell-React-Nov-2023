# ES6 Features
## let
```
for(let i =0; i < 10; i++){
}
```
## const
```
const pi = 3.14
```
## Destructuring (Array)
```
let nos = [3,1,4,2,5]
let [x, y] = nos
```
## Rest Operator (Array)
```
let nos = [3,1,4,2,5]
let [x, y, ...z] = nos
```
## Spread Operator (Array)
```
let nos = [3,1,4,2,5]
let newNos = [...nos, 10, 20, 30]
```
## Rest & Spread (function arguments)
```
function add(...nos){
    let result = 0;
    for (let idx = 0; idx < nos.length; idx++)
        result += nos[idx];
    return result;
}
add(10)

add(10,20)

add(10,20,30,40,50,60)

nos = [3,1,4,2,5]

add(...nos)
```
## Destructuring (Object)
```
let emp = {
    id : 100,
    name : 'Magesh',
    salary : 10000,
    org : 'Shell'
}

let {id, salary} = emp

let { name : x, org : y } = emp
```
## Rest Operator (Object)
```
let emp = {
    id : 100,
    name : 'Magesh',
    salary : 10000,
    org : 'Shell'
}

let { id, ...z } = emp
```
## Spread Operator (Object)
```
let emp = {
    id : 100,
    name : 'Magesh',
    salary : 10000,
    org : 'Shell'
}
let newEmp = { ...emp, benefits : 'Healthcare' }
```
## default arguments
```
function add(x=10, y=20){
    return x + y;
}

add()

add(100)

add(undefined, 200)

add(100,200)
```
## Arrow function
```
/*
//function statement
function add(x,y){
    return x + y;
}

//function expression
let add = function(x,y){
    return x + y;
}

//arrow function
let add = (x,y) => {
    return x + y;
}
*/
let add = (x,y) => x + y;
```
## Iterators (for..of)
```
function add(...nos){
    let result = 0;
    for (let no of nos)
        result += no;
    return result;
}
```
## Template strings
```
let x = 10, y = 20
//'sum of 10 and 20 is 30'
let s1 = 'sum of ' + x + ' and ' + y + ' is ' + (x + y)

let s2 = `sum of ${x} and ${y} is ${x+y}`

let s3 = `sum of 
${x} and ${y} 
is ${x+y}`
```
## Object construction enhancements
```
let id = 100,
    name = 'Pen',
    cost = 10,
    category = 'stationary'

let product = { 
    id , 
    name , 
    cost , 
    category,
    display(){
        console.log(`id = ${this.id}, name = ${this.name}, cost = ${this.cost}`);
    }
}
```
## Class
```
class Employee {

    // instance field (private)
    #id = 0;

    // accessor methods
    get id(){
        console.log('getter [id]  triggred');
        return this.#id;
    }
    set id(val){
        console.log('setter [id]  triggred');
        this.#id = val;
    }
    
    // instance fields (public)
    name = '';
    salary = 0;

    // static field
    static ModelType = 'Employee';

    // constructor method
    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // instance methods
    format(){
        return `id = ${this.id}, name = ${this.name}, salary = ${this.salary}`
    }

    //static methods
    static IsEmployee(obj){
        return obj instanceof Employee;
    }
}
```
## class inheritance
```
class FulltimeEmployee extends Employee {
    benefits = '';
    constructor(id, name, salary, benefits){
        super(id, name, salary);
        this.benefits = benefits;
    }
    format(){
        return `${super.format()}, benefits = ${this.benefits}`
    }
}
```
## Reference
- http://es6-features.org