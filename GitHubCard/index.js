const { default: axios } = require("axios");

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
];

for (let i = 0; i < followersArray.length; i++) {
  getGitCard(followersArray[i]);
}

function getGitCard(username) {
  axios
    .get(`https://api.github.com/users/${username}`)
    .then((resp) => {
      document.querySelector(".cards").appendChild(githubCard(resp.data));
    })
    .catch((err) => console.error(err));
}

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
	@@ -28,7 +51,51 @@
    user, and adding that card to the DOM.
*/

function githubCard(getInfo) {
  // STEP 3 Answer
  const card = document.createElement("div");
  const imgCard = document.createElement("img");
  const cardInfo = document.createElement("div");
  const cardName = document.createElement("h3");
  const cardlogin = document.createElement("p");
  const cardLocation = document.createElement("p");
  const cardProfile = document.createElement("p");
  const cardA = document.createElement("a");
  const cardFollowers = document.createElement("p");
  const cardFollowing = document.createElement("p");
  const cardBio = document.createElement("p");

  card.classList.add("card");
  cardInfo.classList.add("card-info");
  cardName.classList.add("name");
  cardlogin.classList.add("username");

  imgCard.src = getInfo.avatar_url;
  imgCard.alt = "github user";
  cardName.textContent = getInfo.name;
  cardlogin.textContent = getInfo.login;
  cardLocation.textContent = getInfo.location;
  cardProfile.textContent = "Profile";
  cardA.textContent = "Link to profile";
  cardA.href = getInfo.html_url;
  cardFollowers.textContent = `Followers: ${getInfo.followers}`;
  cardFollowers.href = getInfo.followers_url;
  cardFollowing.textContent = `Following: ${getInfo.following}`;
  cardFollowing.href = getInfo.following_url;
  cardBio.textContent = `Bio: ${getInfo.bio}`;

  card.appendChild(imgCard);
  card.appendChild(cardInfo);
  cardInfo.appendChild(cardName);
  cardInfo.appendChild(cardlogin);
  cardInfo.appendChild(cardLocation);
  cardInfo.appendChild(cardProfile);
  cardProfile.appendChild(cardA);
  cardInfo.appendChild(cardFollowers);
  cardInfo.appendChild(cardFollowing);
  cardInfo.appendChild(cardBio);

  return card;
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
