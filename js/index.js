const nome = document.getElementById("nome")
const numero = document.getElementById("numero")
const imagem = document.getElementById("pokemon")
const form = document.querySelector("form")
let pokemonnome = "6"

const pokemonFetch = async (pokemon) => {
  const ApiResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );
  const data = await ApiResponse.json(); 
  return data;
};

const pokemonDados = async (pokemon) => {
    const data = await pokemonFetch(pokemon.toLowerCase());
    nome.innerHTML = data.name;
    numero.innerHTML = `${data.id} -`;
    imagem.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    pokemonnome = document.getElementById("itexto").value
    pokemonDados(pokemonnome);
})