export function removeClosed(){
    return function(dispatch, getState){
        const storeState = getState();
        const bugs = storeState.bugsStore.bugs;
        const openBugs = bugs.filter(bug => !bug.isClosed)
        const init_bug_action = { type : 'BUGS_INIT', payload : openBugs}
        dispatch(init_bug_action);
    }
}