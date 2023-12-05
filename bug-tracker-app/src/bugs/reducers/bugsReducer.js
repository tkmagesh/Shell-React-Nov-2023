const initialState = {
    sortAttr : '',
    sortByDesc : false,
    bugs : []
};
function bugsReducer(currentState = initialState, action){
    switch (action.type) {
        case 'BUGS_ADD':
            return {...currentState, bugs : [...currentState.bugs, action.payload]}
        case 'BUGS_REPLACE':
            const updatedBug = action.payload;
            return {...currentState, bugs : currentState.bugs.map(bug => bug.id === updatedBug.id ? updatedBug : bug)}
        case 'BUGS_REMOVE':
            const bugToRemove = action.payload;
            return {...currentState, bugs : currentState.bugs.filter(bug => bug.id !== bugToRemove.id)}
        case 'BUGS_INIT':
            return {...currentState, bugs : action.payload};
        case 'BUGS_SORT':
            return action.payload;
        default:
            break;
    }
    return currentState;
}

export default bugsReducer;