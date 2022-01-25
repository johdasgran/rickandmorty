/****** Rick and Morty API *******/

let images = document.getElementById("image");

let container = document.querySelector("main.main");

let test = document.querySelector("div.test");

let url = "https://johdasgran.github.io/rickandmorty/images/ricklantis.png";

test.innerHTML = `<div id="image" class="card-image">
<img id="image" src="${url}" alt="" />
</div>

<div class="container-text">

<div class="card-title">

  <h2>Rick Sanchez</h2>
  <!-- 🔴🟢⚪ -->
  <p class="status"><span>Status: 🔴 </span>Dead</p>
  <p class="species"><span>Species: </span>Human</p>
  <p class="gender"><span>Gender: </span>Male</p>

</div>

<div class="location">

  <h2>Location:</h2>
  <p class="name"><span>Name: </span>Purge Planet</p>
  <p class="dimesion">
    <span>Dimension: </span>Replacement DImension
  </p>

</div>
</div>
</div>
`;


console.log(container);






// Main card container 
let container_card = document.createElement("div");
container_card.classList = "container-card heartbeat";
container_card.id = "image";
container.appendChild(container_card);


console.log(container_card)



let card_image = document.createElement("div");
card_image.className = "card_img";
card_image.id = "hola";

container_card.appendChild(card_image);



console.log(card_image)












/* **/


const fetch_data = async () => {
  let response = await fetch("https://rickandmortyapi.com/api/character/");

  const API_DATA = await response.json();

  console.table(API_DATA);

  console.log(API_DATA.results[0].image);


  // create tag img DOM
  const show_images = () => {
    let image_url = API_DATA.results[10].image;
    images.innerHTML = "";
    let img = document.createElement("img");
    img.src = image_url;
    img.width = "120";
    img.height = "120";
    images.append(img);
  }
  show_images();



};

fetch_data();
