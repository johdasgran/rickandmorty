/****** Rick and Morty API *******/

/*********  Bebe ese novio tuyo es medio culero   **********/

const fetch_data = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character/");
  const location = await fetch("https://rickandmortyapi.com/api/location/");
  const API_DATA = await response.json();
  const gps = await location.json();

  console.log(gps);

  for (let i = 0; i < API_DATA.results.length; i++) {
    // const element = API_DATA.results[i].name;

    const url_image = API_DATA.results[i].image;
    const name = API_DATA.results[i].name;

    const status = API_DATA.results[i].status;
    const species = API_DATA.results[i].species;
    const gender = API_DATA.results[i].gender;

    const location_name = gps.results[i].name;
    const location_dimension = gps.results[i].dimension;

    function addCard() {
      let container = document.querySelector("main.main");

      // Main card container
      let container_card = document.createElement("div");
      container_card.classList = "container-card heartbeat";
      container_card.id = "image";
      container.appendChild(container_card);
      // console.log(container_card);

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

      // Card-title
      let card_title = document.createElement("div");
      card_title.className = "card-title";
      card_text.appendChild(card_title);

      // Title
      let title_card = document.createElement("h2");
      title_card.textContent = name;
      card_title.appendChild(title_card);

      // Status tag "p" container
      let status_card = document.createElement("p");
      status_card.textContent = status;
      card_title.appendChild(status_card);
      // Status tag "span" child
      let alive_or_dead = document.createElement("span");
      alive_or_dead.className = "status";

      if (status == "Alive") {
        alive_or_dead.textContent = "Status: 🟢 ";
      } else if (status == "Dead") {
        alive_or_dead.textContent = "Status: 🔴 ";
      } else {
        alive_or_dead.textContent = "Status: ​​⚫️​ ";
      }
      status_card.insertAdjacentElement("afterbegin", alive_or_dead);

      // Species tag "p" container
      let species_card = document.createElement("p");
      species_card.textContent = species;
      card_title.appendChild(species_card);
      // Status tag "span" child
      let class_species = document.createElement("span");
      class_species.textContent = "Species: ";
      class_species.className = "status";
      species_card.insertAdjacentElement("afterbegin", class_species);

      // Species tag "p" container
      let gender_card = document.createElement("p");
      gender_card.textContent = gender;
      card_title.appendChild(gender_card);
      // Status tag "span" child
      let class_gender = document.createElement("span");
      class_gender.textContent = "Gender: ";
      class_gender.className = "status";
      gender_card.insertAdjacentElement("afterbegin", class_gender);

      /** */
      // Location
      let card_location = document.createElement("div");
      card_location.className = "location";
      card_text.appendChild(card_location);

      // Title location
      // let title_location = document.createElement("h2");
      // title_location.textContent = "Location: ";
      // card_location.appendChild(title_location);

      // name location tag "p" container
      let location_card = document.createElement("p");
      location_card.textContent = location_name;
      card_location.appendChild(location_card);
      // Status tag "span" child
      let class_location = document.createElement("span");
      class_location.textContent = "Name: ";
      class_location.className = "name";
      location_card.insertAdjacentElement("afterbegin", class_location);

      // dimension tag "p" container
      let dimension_card = document.createElement("p");
      dimension_card.textContent = location_dimension;
      card_location.appendChild(dimension_card);
      // Status tag "span" child
      let class_dimension = document.createElement("span");
      class_dimension.textContent = "Dimension: ";
      class_dimension.className = "dimesion";
      dimension_card.insertAdjacentElement("afterbegin", class_dimension);
    }

    addCard();
  }
};

fetch_data();
