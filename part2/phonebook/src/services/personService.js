import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAllPersons = () => {
    return axios.get(baseUrl)
}

const createPerson = (newPerson) => {
    return axios.post(baseUrl, newPerson)
}

const updatePerson = (newPerson) => {
    return axios.put(`${baseUrl}/${newPerson.id}`, newPerson)
}

const deletePerson = (person) => {
    return axios.delete(`${baseUrl}/${person.id}`)
}

export default {
    getAllPersons: getAllPersons,
    createPerson: createPerson,
    updatePerson: updatePerson,
    deletePerson: deletePerson
}