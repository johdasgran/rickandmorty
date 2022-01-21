let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let API = "https://rickandmortyapi.com/api/character/";

function fetchInfo(url_api, callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", url_api, true);
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error("Error: " + url_api);
        return callback(error, null);
      }
    }
  };
  xhttp.send();
}

fetchInfo(API, function (error1, data1) {
  if (error1) return console.log(error1);

  // console.log(API + data1.results[10].id);
  // console.log(data1.results[1].id);
  // // console.log(API + data1.results[0].status);
  // console.log(data1.results[1].name);
  // console.log(data1.results[1].status);
  // console.log(data1.results[1].species);

  // En data1 se guardo la primera respuesta
  // URL concatenamos el valor que se encuentra data1.results[0].id ente caso es 1
  //la url que pasamos es https://rickandmortyapi.com/api/character/1

  fetchInfo(API + data1.results[0].id, function (error2, data2) {
    // data2 tiene un objeto con la respuesta de la anterior URL
    // data2 es toda la información de Rick Sanches
    // data2.origin.url es una URL que contiene el objeto https://rickandmortyapi.com/api/location/1
    if (error2) return console.log(error2);
    fetchInfo(data2.origin.url, function (error3, data3) {
      // data3 tiene como valor la respuesta de la anterior URL
      // En conclusion data1, data2 y data3 tienen diferentes valores
      if (error3) return console.log(error3);
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  });
});
