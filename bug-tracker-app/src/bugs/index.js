import BugStats from './views/bug-stats';
import BugSort from './views/bug-sort';
import BugEdit from './views/bug-edit';
import BugList from './views/bug-list';
import './index.css';

const Bugs = ({bugsState, addNew, toggle, remove, removeClosed, sort}) => {    
    const { bugs, sortAttr, sortByDesc } = bugsState
    const closedCount = bugs.reduce((prevResult, bug ) => bug.isClosed ? prevResult + 1 : prevResult, 0)           
    return (
        <>
            <BugStats count={bugs.length} closedCount={closedCount}/>
            <BugEdit addNew={addNew}/>
            <BugSort bugs={bugs} sort={sort} sortAttr={sortAttr} sortByDesc={sortByDesc}/>
            <BugList {...{bugs, toggle, remove, removeClosed}} />
        </>
    )
}

export default Bugs;