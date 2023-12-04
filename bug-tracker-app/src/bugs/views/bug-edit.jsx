import { useState } from "react";

const BugEdit = ({addNew}) => {
    const [newBugName, setNewBugName] = useState(''); 
    return (
        <section className="edit">
            <label htmlFor="" >Bug Name :</label>
            <input type="text" onInput={({ target }) => setNewBugName(target.value)} />
            <button onClick={() => addNew(newBugName)} >Add New</button>
        </section>
    )
}
export default BugEdit;