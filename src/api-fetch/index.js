/****** Rick and Morty API *******/

let contBanderas = document.getElementById("image");

const contadorDoctor = async () => {
  let response = await fetch("https://rickandmortyapi.com/api/character/");

  let CITAS = await response.json();

  console.table(CITAS);

  console.log(CITAS.results[0].image);
  let image = CITAS.results[0].image;

  contBanderas.innerHTML = "";
  let img = document.createElement("img");
  img.src = image;
  img.width = "120";
  img.height = "120";
  contBanderas.appendChild(img);
};

contadorDoctor();
