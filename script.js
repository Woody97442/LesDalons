
// Variable
let users = [];

// Function

// Récupper les donnée des utilisateur
function GetUsers(url) {
  fetch(url)
    .then((response) => response.json()).then((data)=>{
      users = data.results;
      displayUsers(users);
      console.log(data.results);
    }).catch((error)=>{
      console.error("Une erreur s'est produite lors de la récupération des utilisateurs : ", error);
    })
}


// Gestion de lafficharge des utilisateur sur la page html
function displayUsers(users) {
  const userList = document.getElementById("user-list");

  // Boucle sur le tableau
  users.forEach((user) => {
    const userCard = document.createElement("div");
    userCard.classList.add("user-card");

    // Ajoute de l'icône du genre avec une condition
    const genderIcon = document.createElement("i");
    genderIcon.classList.add("fas");
    genderIcon.classList.add(user.gender === "female" ? "fa-venus" : "fa-mars");
    genderIcon.classList.add("user-gender");
    genderIcon.style.color = user.gender === "female" ? "pink" : "blue";

    const userAvatar = document.createElement("img");
    userAvatar.classList.add("user-avatar");
    userAvatar.src = user.picture.medium;

    const userName = document.createElement("div");
    userName.classList.add("user-name");
    userName.textContent = user.name.last + " " + user.name.first;

    const userEmail = document.createElement("div");
    userEmail.textContent = user.email;
    
    const userDate = document.createElement("div");
    userDate.textContent = "Dalons depuis : " + user.registered.age + "ans";

    // Ajoute les élement à la card
    userCard.appendChild(genderIcon);
    userCard.appendChild(userAvatar);
    userCard.appendChild(userName);
    userCard.appendChild(userEmail);
    userCard.appendChild(userDate);

    // Balence la card sur la page 
    userList.appendChild(userCard);
  });
}

// Execute la function 
GetUsers("https://randomuser.me/api/?results=20");