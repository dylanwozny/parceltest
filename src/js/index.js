// default export the name of the module
// import module
// DONT FORGET .JS at file extension
import userTemplate from "./templates/userTemplate.js";
import sayHello from "./utils/dataFetcher.js";
import { sayGoodBye } from "./utils/dataFetcher.js";
// day1
import { dataFetcher2 } from "./utils/dataFetcher.js";
// day2
import { dataFetcher } from "./utils/dataFetcher.js";
import render from "./utils/render";

const appInit = async function () {
  const root = document.querySelector("#app");
  const userData = await dataFetcher(
    "https://jsonplaceholder.typicode.com/users"
  );
  render(userData);
 
};

appInit();

// pass in test data to DOM builder

// json data url
// const temp = dataFetcher2("https://jsonplaceholder.typicode.com/todos/1");

// // calling function from dataFetcher
// const initApp = async function () {
//   const domData = await dataFetcher2(
//     "https://jsonplaceholder.typicode.com/todos/1"
//   );
//   console.log(domData);
// };

// initApp();

// Data fetch
// sending out to be removed written updated CRUD
// get Request getData
// Firebase data managment promises
// send out to be written asyn task.... waiting

// // Remote server data
// function asynRequest() {
//   const data = {
//     name: "dylan",
//     id: "12",
//   };
//   const num = Math.random() * 10;

//   // ask for data
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (num >= 5) {
//         resolve(data);
//       } else {
//         reject("there was an error deal with it");
//       }
//     }, 1500);
//   });
// }

// //calling function async code
// asynRequest()
//   .then((data) => console.log(data))
//   .catch(err=> console.log(err));
