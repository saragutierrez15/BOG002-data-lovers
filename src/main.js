import data from './data/pokemon/pokemon.js';

const pokemonEnPantalla = document.getElementById('pokemonEnPantalla');

for(let i = 0;i<data.pokemon.length;i ++) {
    //let nombrePokemon = data.pokemon[i]['name'].toUpperCase();//
    let numPokemon = data.pokemon[i]['num'];
    let urlImagen = data.pokemon[i]['img'];
    let imagen = new Image (150,150);
    imagen.src = urlImagen;
    let divTitulo = document.createElement ('div')
    divTitulo.innerHTML = nombrePokemon +' ' + numPokemon;
    let nuevoDiv = document.createElement ('div');
    nuevoDiv.appendChild (divTitulo)
    divTitulo.classList.add ('cardTitulo')
    pokemonEnPantalla.appendChild(nuevoDiv);
    nuevoDiv.classList.add ('card');
    nuevoDiv.insertAdjacentElement ('afterbegin',imagen);
  }
 









  
//const arrayPokemones = pokemones.pokemon
//const arrayPokemones = pokemones.pokemon
//for(let i = 0;i<arrayPokemones.length;i ++) {
//   let nombrePokemon = arrayPokemones[i].name; 
//}
//let container = document.getElementById('pokemonEnPantalla')
//let contenido = arrayPokemones
//contenido.forEach (item => {
//  container.innerHTML += `<p>${item}</p>`})
 



//for (const propiedades in arrayPokemones) {
//    console.log(`${propiedades}: ${arrayPokemones[propiedades]}`);
//    
//  }
//let propiedades = Object.keys (arrayPokemones)
//console.log (propiedades)
   

//vamos a mostrar el arreglo en pantalla
//let pkmData = Object.values(data.data);//


 

//document.getElementById ('pokemonEnPantalla').appendChild(container)
//container.appendChild (contenido)

