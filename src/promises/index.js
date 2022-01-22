const fetchInfo = require("../utils/fetchInfo");

const API = "https://rickandmortyapi.com/api/character/";

fetchInfo(API)
.then(data => {
    console.log(data.info.count);
    return fetchInfo(`${API}${data.results[0].id}`);
})
.then(data => {
    console.log(data.name);
    return fetchInfo(data.origin.url);
})
.then(data => {
    console.log(data.dimension);
})
.catch(err => console.err(err));