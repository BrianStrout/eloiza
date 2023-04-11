const lefties = Array.from(document.querySelectorAll(".lstem-stage"));
const righties = Array.from(document.querySelectorAll(".rstem-stage"));
console.log(lefties);
const timing = 125;
let countUp = true;

function dying() {
  console.log("time to die");
  for (let j = lefties.length - 2; j >= 0; j--) {
    let descent = lefties.length - j;
    let delay = descent * timing;
    setTimeout(() => {
      lefties.forEach((stem, index) => {
        stem.style.opacity = "0";
        if (index === j) {
          stem.style.opacity = "1";
        }
      });
    }, delay);
    setTimeout(() => {
      righties.forEach((stem, index) => {
        stem.style.opacity = "0";
        if (index === j) {
          stem.style.opacity = "1";
        }
      });
    }, delay);
  }
}

function blooming() {
  console.log("blooming");
  for (let i = 0; i < lefties.length; i++) {
    let delay = i * timing;
    setTimeout(() => {
      lefties.forEach((stem, index) => {
        stem.style.opacity = "0";
        if (index === i) {
          stem.style.opacity = "1";
        }
      });
    }, delay);
    setTimeout(() => {
      righties.forEach((stem, index) => {
        stem.style.opacity = "0";
        if (index === i) {
          stem.style.opacity = "1";
        }
      });
    }, delay);

    if (i === lefties.length - 1) {
      countUp = false;
      setTimeout(() => {
        console.log("count up no more");
        dying();
        i = 0;
      }, delay);
    }
  }
}

export default blooming;
