import { useState } from 'react';
import BugStats from './views/bug-stats';
import BugSort from './views/bug-sort';
import BugEdit from './views/bug-edit';
import BugList from './views/bug-list';
import * as bugActionCreators from './actions';

import './index.css';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';



const Bugs = () => { 
    const [showClosed, setShowClosed] = useState(false);   
    const {addNew, removeClosed, sort, load } = bindActionCreators(bugActionCreators, useDispatch());
    const { bugs, sortAttr, sortByDesc } = useSelector(({bugsStore}) => {
        const { bugs, sortAttr, sortByDesc } =  bugsStore
        return {
            bugs : showClosed ? bugs.filter(bug => bug.isClosed) : bugs,
            sortAttr,
            sortByDesc
        }
    });
    
    const closedCount = bugs.reduce((prevResult, bug ) => bug.isClosed ? prevResult + 1 : prevResult, 0)           
    return (
        <>
            <button onClick={load}>Load Bugs</button>
            <BugStats count={bugs.length} closedCount={closedCount}/>
            <BugEdit addNew={addNew}/>
            <BugSort sort={sort} sortAttr={sortAttr} sortByDesc={sortByDesc}/>
            <BugList {...{ removeClosed}} />
        </>
    )
}

export default Bugs;