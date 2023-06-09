function Animator(selector, alias, action, noun, delay) {
  console.log(delay, "input delay");
  let animTarget;
  let animTargetArray;
  let tt = action;
  if (selector === "id") {
    animTarget = document.getElementById(`${alias}`);
    animTarget.classList[action](`${noun}`);
  } else if (selector === "class") {
    console.log(delay, "is delay");
    animTargetArray = Array.from(document.querySelectorAll(`.${alias}`));
    console.log(animTargetArray);
    animTargetArray.forEach((target, index) => {
      console.log(index);
      let lag = index * delay;
      console.log(lag, "is lag");
      setTimeout(() => {
        target.classList[action](`${noun}`);
      }, lag);
    });
  } else {
    console.log("selector error");
    return;
  }
}
export { Animator };
