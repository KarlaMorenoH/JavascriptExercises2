const IMAGE_URL = "https://placehold.co/200";

const users = [
    {
        id: 1,
        user_name: 'Eduardo',
        description: 'lorem ipsum',
        age: '46',
        fav_music: {
            bands: [
                'Korn', 'Slipknot', 'Deftones', 'Papa Roach'
            ]
        }
    },
    {
        id: 2,
        user_name: 'Karla',
        description: 'Lorem lorem lorem',
        age: '23',
        fav_music: {
            bands: [
                'Dua Lipa', 'Lady Gaga', 'Billie Eillish', 'Lana del Rey'
            ]
        }
    }
];

const cardContainer = document.getElementById("card-container");
console.log('Card container:', cardContainer); //Verifico mi elemento creado

function createUserCard(user) {
    /*const card = document.createElement("div");
    card.classList.add("card");*/
    console.log('Creating card for user:', user); // Volvemos a verificar

    const cardImgContainer = document.createElement("div");
    cardImgContainer.classList.add("card-image-container");

    const imageElement = document.createElement("img");
    imageElement.src = IMAGE_URL;
    imageElement.alt = "User photo";
    cardImgContainer.appendChild(imageElement);

    const cardTitleElement = document.createElement("h3");
    cardTitleElement.classList.add("card-title");
    cardTitleElement.textContent = user.user_name;

    const cardAgeElement = document.createElement("p");
    cardAgeElement.textContent = `Age: ${user.age}`;

    const cardDescElement = document.createElement("p");
    cardDescElement.textContent = user.description;

    const cardFavMusicElement = document.createElement("p");
    cardFavMusicElement.textContent = `Favorite Bands: ${user.fav_music.bands.join(', ')}`;

    /*card.append(cardImgContainer, cardTitleElement, cardAgeElement, cardDescElement, cardFavMusicElement);
    cardContainer.appendChild(card);*/
}


//Hasta aqui obtengo "Creating card for user en la consola de la página"
// puedo desbloquear el contenido activando el código de card.append
users.forEach(createUserCard);
