import { Animator } from "./animator";
import blooming from "./bloomOnPortal";
const menuTattoo = document.getElementById("menu--tattoo");
const menuPainting = document.getElementById("menu--painting");
const menuMurals = document.getElementById("menu--murals");
const menuMusic = document.getElementById("menu--music");
const menuShop = document.getElementById("menu--shop");
const menuContact = document.getElementById("menu--contact");
const key = document.getElementById("key");
const theStarsAbove = document.getElementById("theStarsAbove");
const theShade = document.querySelector(".the--shade");

const gridRightDisplays = Array.from(
  document.querySelectorAll(".grid--right-content")
);
const gridRightIntro = document.querySelector(".r-intro");
const gridRightTattoo = document.querySelector(".r-tattoos");
const gridRightPaintings = document.querySelector(".r-paintings");
const gridRightMusic = document.querySelector(".r-music");
const gridRightMerch = document.querySelector(".r-merch");
const gridRightContact = document.querySelector(".r-contact");

const updateDisplay = (id) => {
  let arrayIndex;

  switch (id) {
    case "menu--tattoo":
      arrayIndex = 1;
      console.log("switched");
      break;
    case "menu--painting":
      arrayIndex = 2;
      console.log("switched");
      break;
    case "menu--music":
      arrayIndex = 3;
      console.log("switched");
      break;
    case "menu--shop":
      arrayIndex = 4;
      console.log("switched");
      break;
    case "menu--contact":
      arrayIndex = 5;
      console.log("switched");
      break;
    case "menu--intro":
      arrayIndex = 0;
      console.log("switched");
      break;
  }

  console.log(arrayIndex + "updating");
  gridRightDisplays.forEach((page, index) => {
    if (index === arrayIndex) {
      if (page.classList.contains("scattered")) {
        page.classList.remove("scattered");
      }
      return;
    }

    if (!page.classList.contains("scattered")) {
      page.classList.add("scattered");
    }
  });
};

const changeChannel = (channel) => {
  // console.log(theStarsAbove.classList);
  if (theStarsAbove.classList.contains("orbiting")) {
    theStarsAbove.classList.remove("orbiting");
    theShade.classList.remove("throwingShade");
  }

  if (channel.classList.contains("menu--item")) {
    console.log(channel.id);
    let cardCalled = document.getElementById(`${channel.id}-card`);
    let cardShown = document.querySelector(".card--shown");
    cardShown.classList.remove("card--shown");

    setTimeout(() => {
      theStarsAbove.classList.add("orbiting");
      theShade.classList.add("throwingShade");
    }, 500);
    setTimeout(() => {
      blooming();
    }, 1200);
    setTimeout(() => {
      cardCalled.classList.add("card--shown");
      updateDisplay(channel.id);
    }, 3500);
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
