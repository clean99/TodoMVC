import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/notes'
const baseloginUrl = '/api/login'
let token = null
const setToken = newToken =>{
    token = `bearer ${newToken}`
}
const login = async credentials =>{
    const response = await axios.post(baseloginUrl,credentials)
    return response.data
}
const getAll = ()=>{
    return axios.get(baseUrl);
}

const create = async newObject =>{
    const config = {
        headers:{Authorization:token},
    }
    const response = await axios.post(baseUrl, newObject, config)
    return response.data
}
/*const create = newObject =>{
    return axios.post(baseUrl,newObject);
}*/

const update = (id,newObject) =>{
    return axios.put(`${baseUrl}/${id}`,newObject);
}


export default {
    setToken,
    login,
    getAll,
    create,
    update
}