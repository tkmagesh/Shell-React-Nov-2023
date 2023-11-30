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
### Spread Operator (Object)
```
let emp = {
    id : 100,
    name : 'Magesh',
    salary : 10000,
    org : 'Shell'
}
let newEmp = { ...emp, benefits : 'Healthcare' }
```
