```
function spinnerReducer(currentState = 50, action){
    if (action.type === 'INCREMENT') return currentState + 1;
    if (action.type === 'DECREMENT') return currentState - 1;
    return currentState;
}
undefined
const store = StateManager.createStore(spinnerReducer)
undefined
store.getState()
50
store.dispatch({type : 'INCREMENT'})
undefined
store.getState()
51
store.dispatch({type : 'INCREMENT'})
undefined
store.getState()
52
store.subscribe(() => console.log('spinner value :', store.getState()))
undefined
store.dispatch({type : 'INCREMENT'})
VM1204:1 spinner value : 53
undefined
store.dispatch({type : 'INCREMENT'})
VM1204:1 spinner value : 54
undefined
store.dispatch({type : 'INCREMENT'})
VM1204:1 spinner value : 55
undefined
store.dispatch({type : 'DECREMENT'})
VM1204:1 spinner value : 54
undefined
store.dispatch({type : 'DECREMENT'})
VM1204:1 spinner value : 53
undefined
store.dispatch({type : 'DECREMENT'})
VM1204:1 spinner value : 52
undefined
store.dispatch({type : 'DOANYTHING'})
```