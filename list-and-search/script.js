let userContainer = document.querySelector(".userContainer");
let searchInput = document.querySelector("#searchInput");

const users = [
  {
    profileUrl:
      "https://i.pinimg.com/736x/65/25/af/6525af10ed17940c4a16129575e988c7--the-heroes-marvel-heroes.jpg",
    name: "Star Lord",
    email: "quillstarlord@example.com",
  },
  {
    profileUrl:
      "https://tse1.mm.bing.net/th/id/OIP.BQPgT_7OWc_tcV9HzqcfdwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "Rocket",
    email: "sigmarocket@example.com",
  },
  {
    profileUrl:
      "https://res.cloudinary.com/nerd-club/image/upload/c_thumb,dpr_2.0,f_auto,h_1000,q_auto:good,w_1400/I-Am-Groot.jpg",
    name: "Groot",
    email: "plantgroot@example.com",
  },
  {
    profileUrl:
      "https://cdn.mos.cms.futurecdn.net/Y6EouPiXCAogLnvRSzNTHH-1200-80.jpg",
    name: "Drax",
    email: "crazydrax@example.com",
  },
  {
    profileUrl:
      "https://insidethemagic.net/wp-content/uploads/2023/05/New-Design-6-800x400.jpg",
    name: "Mentis",
    email: "anteenagirlmentis@example.com",
  },
  {
    profileUrl:
      "https://tse1.mm.bing.net/th/id/OIP.P-JKlwdJ4a_2IjJgvCeuZAHaHZ?rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "Gamora",
    email: "greengirlgamora@example.com",
  },
  {
    profileUrl:
      "https://vignette.wikia.nocookie.net/disney-marvel-gotg/images/a/ae/Nebula3.png/revision/latest?cb=20170608160721",
    name: "Nebula",
    email: "bluegirlnebula@example.com",
  },
];

const renderUsers = (arr) => {
  userContainer.innerHTML = "";
  arr.map((obj) => {
    let { profileUrl, name, email } = obj;

    let divElem = document.createElement("div");
    divElem.className = "userItem";
    divElem.innerHTML = `
        <div class="image">
          <img
            src=${profileUrl}>
        </div>
        <div class="userDetails">
          <h3>${name}</h3>
          <p>${email}</p>
        </div>
      `;
    userContainer.append(divElem);
  });
};

renderUsers(users);

const handleSearch = (event) => {
  let searchValue = event.target.value;
  let filteredUsers = users.filter((obj) => {
    return (
      obj.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      obj.email.toLowerCase().includes(searchValue.toLowerCase())
    );
  });
  renderUsers(filteredUsers);
};

searchInput.addEventListener("input", handleSearch);
