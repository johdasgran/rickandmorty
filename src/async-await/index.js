const fetchInfo = require("../utils/fetchInfo");

const API = "https://rickandmortyapi.com/api/character/";

const showData = async (url_api) => {
  try {
    const data = await fetchInfo(url_api);
    const character = await fetchInfo(`${url_api}${data.results[1].id}`);
    console.log(data.info.count);
    console.log(character.name);
    try {
      const origin = await fetchInfo(character.origin.url);
      console.log(origin.dimension);
      console.log(origin.name);
    } catch (error) {
      console.log("Url origin empty");
    }

    // console.log(data.info.count);
    // console.log(character.name);
    // console.log(origin.dimension);
    // console.log(origin.name);
  } catch (error) {
    console.error(error);
  }
};

showData(API);
