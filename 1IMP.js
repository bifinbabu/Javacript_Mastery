// const testPromise = (t) => {
//   if (t) {
//     setTimeout(() => {
//       return new Pro
//     }, t * 1000);
//   } else {
//     return false;
//   }
// };

let myPromise = new Promise(function (myResolve, myReject) {
  // "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject(); // when error
});

myPromise.then(
  function (value) {},
  function (error) {}
);
