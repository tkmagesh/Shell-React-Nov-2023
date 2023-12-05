import axios from 'axios';

async function getAll(){
    const response = await axios.get('http://localhost:3030/bugs')
    return response.data;
}

async function save(bugData){
    if (bugData.id === 0){
        const response = await axios.post('http://localhost:3030/bugs', bugData)
        return response.data;
    } else {
        const response = await axios.put(`http://localhost:3030/bugs/${bugData.id}`, bugData)
        return response.data;
    }
}

async function remove(bugData){
    const response = await axios.delete(`http://localhost:3030/bugs/${bugData.id}`)
    return response.data;
}

const bugApi = { getAll, save, remove}
export default bugApi;