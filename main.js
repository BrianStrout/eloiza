import "./index.css";

// import { setupCounter } from "./counter.js";
import clicker from "./src/modules/clicker";
import blooming from "./src/modules/bloomOnPortal";

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `
// let num = 10;
// let reverse = true;
// if (!reverse) {
//   for (let i = num - 1; i >= 0; i--) {
//     console.log(i);
//   }
// } else {
//   for (let i = 0; i < num; i++) {
//     console.log(i);
//   }
// }

document.addEventListener("click", (e) => {
  // blooming();
  clicker(e);
});

// setupCounter(document.querySelector("#counter"));
