const nome = document.getElementById("nome")
const numero = document.getElementById("numero")
const imagem = document.getElementById("pokemon")
const form = document.querySelector("form")

const botao = document.querySelector("button")
const pokedex = document.getElementById("corpo")
const informaçoes = document.getElementById("informaçoes");
const valores = document.getElementById("valores");
let h1s = []

let pokemonnome = "6"

for (let i = 0; i < 4; i++) {
  let h1 = document.createElement("h1");
  h1.classList = `datavalores`;
  valores.appendChild(h1);
  h1s.push(h1)
}
const voltar = document.createElement("button");
voltar.textContent = `Voltar`;
valores.appendChild(voltar);

const pokemonFetch = async (pokemon) => {
  const ApiResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );
  if(ApiResponse.status===200){
    const data = await ApiResponse.json(); 
    return data;
  }
};

const pokemonDados = async (pokemon) => {
    const data = await pokemonFetch(pokemon.toLowerCase());
    if(data){
      datavalores = [
        `Nome: ${data.name}`,
        `Numero: ${data.id}`,
        `Altura: ${data.height} metros`,
        `Largura: ${data.weight} metros`,
      ];
      nome.innerHTML = data.name;
      numero.innerHTML = `${data.id} -`;
      imagem.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

      botao.addEventListener("click", () => {
        pokedex.style.display = `none`
        informaçoes.style.display = `flex`

        for (let i = 0; i < 4; i++) {
          h1s[i].textContent = datavalores[i];
        }
      })
      voltar.addEventListener("click", () => {
        pokedex.style.display = `flex`;
        informaçoes.style.display = `none`;
      })
    } else {
      nome.innerHTML = "Not Found";
      numero.innerHTML = `000 -`;
      imagem.src = "";
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    pokemonnome = document.getElementById("itexto").value
    pokemonDados(pokemonnome);
})