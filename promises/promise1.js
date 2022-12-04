//run in browser
fetch(`https://api.chucknorris.io/jokes/random`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("DATA is ", data);
  })
  .catch();
