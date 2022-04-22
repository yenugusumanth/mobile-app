// const get_movies = () => {
//     return fetch('https://api.themoviedb.org/3/movie/550?api_key=7465bb71382e4c2191819dfcec4bd6fb&language=en-US')
//     .then(response => response.json())
//     .then(result => { 
//     console.log(result);
//     return result;
//     })
//     .catch(err => console.log(err))
//    }
    
import instance from "../config/axiosConfig";

const get_movies = () => { 
//----- Axios Methodology ------
return instance.get('movie/550?api_key=7465bb71382e4c2191819dfcec4bd6fb&language=en-US')
.then(response => response.data)
.catch(err => console.log("Error -", err));}

export { get_movies };