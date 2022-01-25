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

  //   let card = document.querySelector("main#card");

  // card.innerHTML = `
  //   <div class="container-card heartbeat">
  //     <div id="image" class="card-image">
  //       <img id="image" src="${url_image}" alt="" />
  //     </div>

  //     <div class="container-text">
  //       <div class="card-title">
  //         <h2>${name}</h2>
  //         <!-- 🔴🟢⚪ -->
  //         <p class="status"><span>Status: 🟢 </span>${status}</p>
  //         <p class="species"><span>Species: </span>${species}</p>
  //         <p class="gender"><span>Gender: </span>${gender}</p>
  //       </div>

  //       <div class="location">
  //         <h2>Location:</h2>
  //         <p class="name"><span>Name: </span>Purge Planet</p>
  //         <p class="dimesion">
  //           <span>Dimension: </span>Replacement DImension
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // `;

  function addCard() {
    let container = document.querySelector("main.main");

    // Main card container
    let container_card = document.createElement("div");
    container_card.classList = "container-card heartbeat";
    container_card.id = "image";
    container.appendChild(container_card);
    console.log(container_card);

    // Container image
    let card_image = document.createElement("div");
    card_image.className = "card-image";
    card_image.id = "image";
    container_card.appendChild(card_image);

    // Image
    let image = document.createElement("img");
    image.src = url_image;
    image.alt = name;
    card_image.appendChild(image);

    // Container text
    let card_text = document.createElement("div");
    card_text.className = "container-text";
    container_card.appendChild(card_text);

    // Title
    let title_card = document.createElement("h2");
    title_card.textContent = name;
    card_text.appendChild(title_card);

    // Status tag "p" container
    let status_card = document.createElement("p");
    status_card.textContent = status;
    card_text.appendChild(status_card);
    // Status tag "span" child
    let alive_or_dead = document.createElement("span");
    alive_or_dead.className = "status";

    if (status == "Alive") {
      alive_or_dead.textContent = "Status: 🟢 ";
      status_card.textContent = status;
    } else if (status == "Dead") {
      alive_or_dead.textContent = "Status: 🔴 ";
    } else {
      alive_or_dead.textContent = "Status: ⚪ ";
    }
    status_card.insertAdjacentElement("afterbegin", alive_or_dead);
  }









  addCard();
};

fetch_data();
