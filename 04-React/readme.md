## Zen Coding ##
```
    div 
    div.highlight 
    div#div-1 
    div#div-1.highlight[key-1="val-1" key-2="val-2"] 
    div{This is a div}
    div*3 
    div#div-$*3 
    div+span 
    ul>li 
    ul>li{pen}+li{pencil}+li{marker}
    ul>li*3^ol>li*3 

    #root>h1{Calculator}+.field>label{Number 1:}+input:number^.field>lable{Number 2 :}+input:number^br+button*4+div.highlight{[result]} 
```

## Array.reduce() & Array.map()
```
var nos = [3,1,4,2,5]
nos.reduce(function(prevResult, no){
    var newResult = prevResult + no;
    console.log(`prevResult = ${prevResult}, no = ${no}, newResult = ${newResult}`);
    return newResult;
})

nos.reduce(function(prevResult, no){
    var newResult = prevResult > no ? prevResult : no;
    console.log(`prevResult = ${prevResult}, no = ${no}, newResult = ${newResult}`);
    return newResult;
}, 0)

nos.map(no => no % 2 === 0 ? 'even' : 'odd')

```

## State
State
- Application State
    - State representing the core domain of the application
    - It is highly probable that a change in this state might need to be recognized by other parts of the application
    - DO NOT maintain this in the component
- UI State
    - State representing the UI needs of the application
    - It is not likely that a change in this state need to recognized by other parts of the application
    - Feel free to maintain this in the component