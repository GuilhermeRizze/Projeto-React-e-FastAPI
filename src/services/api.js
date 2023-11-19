import axios from 'axios'

const url = "https://jsonplaceholder.typicode.com"

var token = localStorage.getItem("MEUSITE")
token = "Bearer" + token

const api = axios.create({
    baseURL: url
})

api.defaults.headers.common['Content-Type'] = 'application/json'
api.defaults.headers.common['Authorization'] = 'application/json'

export default api
