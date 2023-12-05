import { useState
 } from "react";
const BugSort = ({bugs, sort, sortAttr, sortByDesc}) => {
    const [sortAttrName, setSortAttrName] = useState('');
    const [isDesc, setSortByDesc] = useState(false);

    const onSortAttrChange = ({target}) => {

        setSortAttrName(target.value);
        sort(bugs, target.value, isDesc)
    }

    const onSortDescChange = ({target}) => {
        setSortByDesc(target.checked);
        sort(bugs, sortAttrName, target.checked);
    }

    return (
        <section className="sort">
            <label htmlFor="">Order By :</label>
            <select defaultValue={sortAttr} onChange={onSortAttrChange}>
                <option value="">--- Select ---</option>
                <option value="id" >Id</option>
                <option value="name">Name</option>
                <option value="isClosed">Status</option>
                <option value="createdAt">Created</option>
            </select>
            <label htmlFor="">Descending ?:</label>
            <input type="checkbox" checked={sortByDesc} onChange={onSortDescChange} />
        </section>
        
    )
}
export default BugSort;
