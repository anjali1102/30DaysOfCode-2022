//run in browser
// fetch(`https://api.chucknorris.io/jokes/random`)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log("DATA is ", data);
//   })
//   .catch();

// function getJoke() {
//   fetch(`https://api.chucknorris.io/jokes/random`)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log( data.value);
//     })
//     .catch();
// }

// getJoke();

/*
----------------------------------------------------

*/
async function getJoke() {
  try {
    let response = await fetch("https://api.chucknorris.io/jokes/random");

    if (response.status == 200) {
      let jsonData = response.json();
      console.log("jsonData", jsonData);
      return jsonData;
    }
  } catch (err) {
    console.log(err);
  }
}

getJoke().then((data) => console.log("data", data.value));
