// TODO : refactor
let _currentBugId = 0;

export function addNew(newBugName){
    const newBug = {
        id : ++_currentBugId,
        name : newBugName,
        isClosed : false,
        createdAt : new Date()
    }
    const add_bug_action = { type : 'BUGS_ADD', payload : newBug};
    return add_bug_action;
}