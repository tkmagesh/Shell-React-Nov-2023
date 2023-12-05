import axios from 'axios';

const inMemoryBugs = [
    {
        id : 1,
        name : 'Bug - 1',
        isClosed : false,
        createdAt : new Date()
    },
    {
        id : 2,
        name : 'Bug - 2',
        isClosed : true,
        createdAt : new Date()
    }
]
export function load(){
    // sync (inmemory data)
    /* 
    const load_action = { type : 'BUGS_INIT', payload : inMemoryBugs}
    return load_action;  
    */

    // async (server communication)
    return function(dispatch){
        /* 
        const response = await axios.get('http://localhost:3030/bugs')
        const load_action = { type : 'BUGS_INIT', payload : response.data}
        return load_action; 
        */

        const p = axios.get('http://localhost:3030/bugs')
        p.then(response => {
            const load_action = { type : 'BUGS_INIT', payload : response.data}
            dispatch(load_action); 
        })
    }
    
}