// // --arrow function--
// const sayHello = ()=>{
//     // explicit return
//     // you need to return a value
//     return value

// }

// // --declared function--
// // cannot call function before declaration
// const temp = function (){

// }

//strict mode
// module can only export one default
// can have many exports

const sayHello = () => {
  return "say hello";
};

const sayGoodBye = () => {
  return "goodbye";
};

// Export
// Curly braces in Js always means its an object
// essentially everything in Js is an object
export default sayHello;
export { sayGoodBye };

// -------------------------day1-------------------------------------

// ASYNC function

const dataFetcher2 = async function (url = null) {
  // await is replacing .then()
  const res = await fetch(url);
  const data = await res.json();

  return data;
};

export { dataFetcher2 };

// async marking is a promise API wrappper
// so you dont have to use .then .then .then

// ----------------------------day2----------------------------------

const dataFetcher = async function (url = null) {
  // retreive response
  const res = await fetch(url);
  // get data as JSon
  const jsonData = await res.json();

  return jsonData;
};

export { dataFetcher };
