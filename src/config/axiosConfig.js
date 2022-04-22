const axios = require('axios');
const instance = axios.create({
baseURL: "https://api.themoviedb.org/3/",
timeout: 15000, // in milliseconds
headers: {
'Content-Type': 'application/json',
'Accept': 'application/json',
},
})
export default instance;