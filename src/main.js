import data from './data/pokemon/pokemon.js';
import { filtrado } from './data.js';


function mostrandoEnPantalla(pokemonesListos){
const pokemonEnPantalla = document.getElementById('pokemonEnPantalla1');
//Creamos un for para obtener la imagen, el nombre y el numero de cada pokemon
for(let i = 0;i<pokemonesListos.length;i ++){
    let nombrePokemon = pokemonesListos[i]['name'].charAt(0).toUpperCase() + pokemonesListos[i]['name'].slice(1);
    let numPokemon = 'N.' + pokemonesListos[i]['num'];
    let urlImagen = pokemonesListos[i]['img'];
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
}
function todos() {
    mostrandoEnPantalla(data.pokemon)
    
}
window.onload = todos;

document.getElementById('principal').addEventListener('click',filtradoCLick);

function filtradoCLick(e){
  let listaPokemones=e.target.dataset.pokemonappid;
  let tipoPokemones=filtrado(data.pokemon, listaPokemones);
    console.log (tipoPokemones)
    if (listaPokemones =='all') {
    document.getElementById('pokemonEnPantalla1').innerHTML=''
    mostrandoEnPantalla(data.pokemon);
    } else {
    document.getElementById('pokemonEnPantalla1').innerHTML=''
    mostrandoEnPantalla(tipoPokemones);
    } 
    
  }
 
  
//const selectElement = document.querySelector("menu-item");
//console.log(selectElement)
//selectElement.addEventListener('change', (event) => {
//const resultado = document.querySelector('.pokemonEnPantalla');
//  resultado.textContent = ${event.target.value}`;
//});*/

  /*let clear = document.querySelectorAll("menu-item");
  clear.addEventListener("click", reload);
  
  function reload() {
      listaPokemones = ();
      salida.value = "";
      posicion2.value = "";
      tipoPokemones = {};
      pokemonEnPantalla = {};
       
  }*/





        /*if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        // a must be equal to b
        return 0;
      }); */