const IMAGE_URL = "https://placehold.co/200";

const users = [
    {
        id: 1,
        user_name: 'User1',
        description: 'lorem ipsum',
        age: '46',
        fav_music: {
            bands: [
                'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    },
    {
        id: 2,
        user_name: 'User LastName',
        description: 'Lorem lorem lorem',
        age: '23',
        fav_music: {
            bands: [
                'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    }
];

const cardContainer = document.getElementById("card-container");

function createUserCard(user) {
    const card = document.createElement("div");
    card.classList.add("card");

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

    card.append(cardImgContainer, cardTitleElement, cardAgeElement, cardDescElement, cardFavMusicElement);
    cardContainer.appendChild(card);
}

users.forEach(createUserCard);
