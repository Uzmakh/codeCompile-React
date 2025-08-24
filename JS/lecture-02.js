console.log("start");
setTimeout(() => {
  console.log("setTimeout callback")
},2000);
Promise.resolve().then(() => { console.log("Promise callbck") });
console.log("end");