import BugStats from './views/bug-stats';
import BugSort from './views/bug-sort';
import BugEdit from './views/bug-edit';
import BugList from './views/bug-list';
import './index.css';

const Bugs = ({bugs, addNew, toggle, remove, removeClosed}) => {    
    const closedCount = bugs.reduce((prevResult, bug ) => bug.isClosed ? prevResult + 1 : prevResult, 0)           
    return (
        <>
            <BugStats count={bugs.length} closedCount={closedCount}/>
            <BugEdit addNew={addNew}/>
            <BugSort/>
            <BugList {...{bugs, toggle, remove, removeClosed}} />
        </>
    )
}

export default Bugs;