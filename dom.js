function fetchPokemonData() {
  var input = document.getElementById("pokemon-name").value;
  var url = "https://pokeapi.co/api/v2/pokemon/" + input;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      var pokemonName = data.name;
      var pokemonImage = data.sprites.front_default;

      document.getElementById("pokemon-name-display").textContent = pokemonName;
      document.getElementById("pokemon-image").src = pokemonImage;
    })
    .catch((error) => console.log(error));
}
var pokemonList = document.getElementById("pokemon-list");
console.log(pokemonList.parentElement);

var firstChild = pokemonList.firstElementChild;
console.log(firstChild);

var lastChild = pokemonList.lastElementChild;
console.log(lastChild);

const listItems = Array.from(document.querySelectorAll("#myList li"));
console.log(listItems);
