import axios from 'axios';


const getAPI = axios.create({
    baseURL: 'http://127.0.0.1:5000',
    timout: 5000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
})

export { getAPI }