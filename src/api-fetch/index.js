/****** Rick and Morty API *******/

/*********  Bebe ese novio tuyo es medio culero   **********/


const fetch_data = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character/");
  const API_DATA = await response.json();

  console.log(API_DATA);

  console.log(API_DATA.results[0].image);

  const url_image = API_DATA.results[0].image;
  const name = API_DATA.results[0].name;

  const status = API_DATA.results[0].status;
  const species = API_DATA.results[0].species;
  const gender = API_DATA.results[0].gender;

  // const character = await API_DATA.results[0].origin.url;
  // console.log(character)

  let card = document.querySelector("main#card");

  const cards = card.innerHTML = `
  <div class="container-card heartbeat">
    <div id="image" class="card-image">
      <img id="image" src="${url_image}" alt="" />
    </div>

    <div class="container-text">
      <div class="card-title">
        <h2>${name}</h2>
        <!-- 🔴🟢⚪ -->
        <p class="status"><span>Status: 🔴 </span>${status}</p>
        <p class="species"><span>Species: </span>${species}</p>
        <p class="gender"><span>Gender: </span>${gender}</p>
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



  const list_card = [cards];
  console.log(list_card);

};

fetch_data();
