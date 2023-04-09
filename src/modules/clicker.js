import { Animator } from "./animator";
const menuTattoo = document.getElementById("menu--tattoo");
const menuPainting = document.getElementById("menu--painting");
const menuMurals = document.getElementById("menu--murals");
const menuMusic = document.getElementById("menu--music");
const menuShop = document.getElementById("menu--shop");
const menuContact = document.getElementById("menu--contact");
const key = document.getElementById("key");
const theStarsAbove = document.getElementById("theStarsAbove");
const theShade = document.querySelector(".the--shade");

const changeChannel = (channel) => {
  console.log(theStarsAbove.classList);
  if (theStarsAbove.classList.contains("orbiting")) {
    theStarsAbove.classList.remove("orbiting");
    theShade.classList.remove("throwingShade");
  }

  if (channel.classList.contains("menu--item")) {
    let cardCalled = document.getElementById(`${channel.id}-card`);
    let cardShown = document.querySelector(".card--shown");
    cardShown.classList.remove("card--shown");

    setTimeout(() => {
      theStarsAbove.classList.add("orbiting");
      theShade.classList.add("throwingShade");
    }, 500);

    setTimeout(() => {
      cardCalled.classList.add("card--shown");
    }, 4500);

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
