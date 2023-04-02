import { Animator } from "./animator";
const menuTattoo = document.getElementById("menu--tattoo");
const menuPainting = document.getElementById("menu--painting");
const menuMurals = document.getElementById("menu--murals");
const menuMusic = document.getElementById("menu--music");
const menuShop = document.getElementById("menu--shop");
const menuContact = document.getElementById("menu--contact");
const key = document.getElementById("key");

const changeChannel = (channel) => {
  if (channel.classList.contains("menu--item")) {
    let cardCalled = document.getElementById(`${channel.id}-card`);
    let cardShown = document.querySelector(".card--shown");
    cardShown.classList.remove("card--shown");

    cardCalled.classList.add("card--shown");

    console.log(cardCalled, "called in changer");
  }
};

const clicker = (e) => {
  console.log(e.target);
  changeChannel(e.target);

  switch (e.target.id) {
    case "key":
      key.classList.add("opening");

      setTimeout(() => {
        Animator("class", "menu--item", "add", "drop--in", 75);
      }, 2000);

      setTimeout(() => {
        key.classList.remove("opening");
      }, 5000);

      console.log(e.target.id);
      break;
    case "":
      console.log(e.target.id);
      break;
    case "":
      console.log(e.target.id);
      break;
    case "":
      console.log(e.target.id);
      break;
    case "":
      console.log(e.target.id);
      break;
    case "":
      console.log(e.target.id);
      break;
  }
};

export default clicker;
