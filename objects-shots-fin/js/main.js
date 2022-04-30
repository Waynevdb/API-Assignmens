//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)

function getDrink() {
  let drink = document.querySelector('input').value

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      let max = data.drinks.length
      // let min = 0
      let rand = Math.floor(Math.random() * max);

      // const randomElement = data.drinks[Math.floor(Math.random() * data.drinks.length)];

      console.log(rand, data.drinks[rand])
      document.querySelector('h2').innerText = data.drinks[rand].strDrink
      document.querySelector('img').src = data.drinks[rand].strDrinkThumb
      document.querySelector('h3').innerText = data.drinks[rand].strInstructions
    })
    .catch(err => {
      console.log(`error ${err}`)
    });

}

