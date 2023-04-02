const menuTattoo = document.getElementById("menu--tattoo");
const menuPainting = document.getElementById("menu--painting");
const menuMurals = document.getElementById("menu--murals");
const menuMusic = document.getElementById("menu--music");
const menuShop = document.getElementById("menu--shop");
const menuContact = document.getElementById("menu--contact");

const changeChannel = (channel) => {
  console.log(channel + "channel called");
};

const clicker = (e) => {
  console.log(e.target);
  changeChannel(e.target);

  switch (e.target.id) {
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
    case "":
      console.log(e.target.id);
      break;
  }
};

export default clicker;
