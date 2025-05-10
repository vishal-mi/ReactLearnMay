import axios from 'axios'
//const baseUrl = 'http://localhost:3001/api/notes'
const baseUrl = 'https://reactlearnmaybackend.onrender.com/api/notes'


const getAll = () => {
    console.log('came here');
    
  const request = axios.get(baseUrl)
  return request.then((response) => {
    console.log(JSON.stringify(response));
    return response.data})
}

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject)
  return request.then((response) => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then((response) => response.data)
}

export default {
  getAll,
  create,
  update,
}