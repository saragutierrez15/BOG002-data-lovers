import data from './data/pokemon/pokemon.js';
import { filtrado } from './data.js';

const pokemonEnPantalla = document.getElementById('pokemonEnPantalla');
//Creamos un for para obtener la imagen, el nombre y el numero de cada pokemon
for(let i = 0;i<data.pokemon.length;i ++) {
    let nombrePokemon = data.pokemon[i]['name'].charAt(0).toUpperCase() + data.pokemon[i]['name'].slice(1);
    let numPokemon = 'N.' + data.pokemon[i]['num'];
    let urlImagen = data.pokemon[i]['img'];
    let imagen = new Image (155,155);
    imagen.src = urlImagen; 
// Creamos un div para mostrar el nombre y el numero del pokémon en la card //
    let divNumero = document.createElement ('div');
    divNumero.innerHTML = numPokemon;
    let divNombre = document.createElement ('div');
    divNombre.innerHTML = nombrePokemon;
    let nuevoDiv = document.createElement ('div');
// Usamos el appendChild para mostrar el nombre y número en la card //
    nuevoDiv.appendChild (divNumero);    
    nuevoDiv.appendChild (divNombre);
    pokemonEnPantalla.appendChild(nuevoDiv);
// Usamos el classlist para darle una class a cada elemento de la tarjeta y manipular las propiedades desde css)
    divNumero.classList.add ('cardNumero')
    divNombre.classList.add ('cardNombre')
    imagen.classList.add ('cardImagen')
    nuevoDiv.classList.add ('card');
// El insertAdjacentElement nos permite mostrar la imagen de cada pokémon //
    nuevoDiv.insertAdjacentElement ('beforeend',imagen);
}
document.getElementById('principal').addEventListener('click',filtradoDom);
function filtradoDom(e){
  let tipopoke=e.target.dataset.pokemonappid;
  let x=filtrado(data.pokemon, tipopoke);
  x.
}




        /*if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        // a must be equal to b
        return 0;
      }); */