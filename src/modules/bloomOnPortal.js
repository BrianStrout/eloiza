let currentPos = 0;
let images = [f1, f2, f1, f6, f3, f4, f3, f4, f1, f3, f4, f3, f6, f1, f2];
let images2 = [b1, b2, b3, b2];
let lifeCycle = [0, 1, , 2, 3];

function blooming() {
  // if (++currentPos >= images.length) currentPos = 0;
  if (++currentPos >= images.length) {
    return;
  } else {
    console.log(currentPos);
  }

  //   image.src = images[currentPos];
}

setInterval(volgendefoto, 200);

export default currentPos;

$(function () {
  var increment = 1;
  var seconds = increment;
  var countUp = true;
  var timerId = setInterval(function () {
    $("#counter").text(seconds);

    if (countUp) {
      seconds += increment;
    } else {
      seconds -= increment;
    }

    if (countUp && seconds > increment * 4) {
      countUp = false;
    } else if (!countUp && seconds <= increment) {
      countUp = true;
    }
  }, 500);
});
