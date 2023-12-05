// TODO : refactor
// let _currentBugId = 0;
import bugApi from "../services/bugApi";

export function addNew(newBugName){
    return async function(dispatch, getState){
        const newBugData = {
            id : 0,
            name : newBugName,
            isClosed : false,
            createdAt : new Date()
        }
        const newBug = await bugApi.save(newBugData)
        const add_bug_action = { type : 'BUGS_ADD', payload : newBugData};
        dispatch(add_bug_action);
    }
}