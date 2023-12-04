const StateManager = (() => {
    let _currentState = undefined,
        _changeListeners = [],
        _reducer = undefined,
        _init_action = { type : '@@INIT/ACTION' }

    function getState(){
        return _currentState;
    }

    function subscribe(listenerFn){
        _changeListeners.push(listenerFn);
    }

    //private
    function notifyChanges(){
        _changeListeners.forEach(listenerFn => listenerFn())
    }

    function dispatch(action){
        let newState = _reducer(_currentState, action);
        if (newState === _currentState) return;
        _currentState = newState;
        notifyChanges();
    }

    function createStore(reducer){
        if (typeof reducer !== 'function'){
            throw new Error('Invalid arguments')
        } 
        _reducer = reducer;

        // to initialize the currentstate with a valid default state
        _currentState = _reducer(undefined, _init_action)
        const store = { 
            getState,
            subscribe,
            dispatch
        }
        return store;
    }

    function bindActionCreators(actionCreators, dispatch){
        const actionDispatchers = {}
        for(let key in actionCreators){
            actionDispatchers[key] = function(...args){
                const action = actionCreators[key](...args)
                dispatch(action);
            }
        }
        return actionDispatchers;
    }

    return {
        createStore,
        bindActionCreators
    };
})()