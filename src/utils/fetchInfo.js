let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


const fetchInfo = (url_api) => {
  return new Promise((resolve, reject) => {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url_api, true);
    xhttp.onreadystatechange = function (event) {
      if (xhttp.readyState === 4) {

        (xhttp.status === 200)
        ? resolve(JSON.parse(xhttp.responseText))
        : reject(new Error("Error: " + url_api));
      }
    };
    xhttp.send();
  });
}

module.exports = fetchInfo;


