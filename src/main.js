import data from './data/pokemon/pokemon.js';
import { filtrado,ordenarAscDes } from './data.js';


function mostrandoEnPantalla(pokemonesListos){
const pokemonEnPantalla1= document.getElementById('pokemonEnPantalla1');
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
    pokemonEnPantalla1.appendChild(nuevoDiv);

// Usamos el classlist para darle una class a cada elemento de la tarjeta y manipular las propiedades desde css)
    divNumero.classList.add ('cardNumero')
    divNombre.classList.add ('cardNombre')
    imagen.classList.add ('cardImagen')
    nuevoDiv.classList.add ('card');
    
// El insertAdjacentElement nos permite mostrar la imagen de cada pokémon //
    nuevoDiv.insertAdjacentElement ('beforeend',imagen);
}     
}
window.onload = mostrandoEnPantalla(data.pokemon);

document.getElementById('principal').addEventListener('click',filtradoCLick);

function filtradoCLick(e){
  let listaPokemones=e.target.dataset.pokemonappid;
  let tipoPokemones=filtrado(data.pokemon, listaPokemones);
    if (listaPokemones =='all') {
    document.getElementById('pokemonEnPantalla1').innerHTML=''
    mostrandoEnPantalla(data.pokemon);
    } else {
    document.getElementById('pokemonEnPantalla1').innerHTML=''
    mostrandoEnPantalla(tipoPokemones);
    }
  }
// AQUI VAMOS BIEN !!!!!!!!


  // Intentos Sara 
document.getElementById('lista').addEventListener('click',filtradoAscDes);
function filtradoAscDes(e) {
  let ordenaraz=e.target.dataset.pokemonorder;
   let az = ordenarAscDes (data.pokemon);
    if (ordenaraz == 'az') {
     mostrandoEnPantalla (az)
 } else { mostrandoEnPantalla (data.pokemon)}
}
//  
//}
   // const ordenarAlfab =data.pokemon.sort(function (anterior, siguiente) {
   //   if (anterior.name > siguiente.name){
   //  return 1;
   // }
   // if (anterior.name < siguiente.name)
   // return -1; 
   // });
   // console.log (ordenarAlfab)
  


   //FUNCIÓN INTENTO GINNA

  /*const ordenar = (data.pokemon,order) => {
    let dataOrdenada=data.sort(function(a,z){
      if(a.name > z.name) {return 1;}
      else {return -1;}
    })
    if(order === 'desc'){dataOrdenada.reverse()}
    return 'dataOrdenada';
  }; */


  /*document.getElementById('lista').addEventListener('click',filtroDesc);

  function filtroDesc(e){
   let ordenaraz=e.target.dataset.pokemonorder;
   let sorting=ordenar(data.pokemon, ordenaraz);
    mostrandoEnPantalla(sorting);
  } /*else {
    document.getElementById('pokemonEnPantalla1').innerHTML=''
    mostrandoEnPantalla(data);
  }*/
  










 /* funciones del menu desplegable*/
(() =>{
 
  const openNavMenu = document.querySelector(".open-nav-menu"),
  closeNavMenu = document.querySelector(".close-nav-menu"),
  navMenu = document.querySelector(".nav-menu"),
  menuOverlay = document.querySelector(".menu-overlay"),
  mediaSize = 991;

  openNavMenu.addEventListener("click", toggleNav);
  closeNavMenu.addEventListener("click", toggleNav);
  // cierra el menú de navegación haciendo clic//
  menuOverlay.addEventListener("click", toggleNav);

  function toggleNav() {
      navMenu.classList.toggle("open");
      menuOverlay.classList.toggle("active");
      document.body.classList.toggle("hidden-scrolling");
  }

  navMenu.addEventListener("click", (event) =>{
      if(event.target.hasAttribute("data-toggle") && 
          window.innerWidth <= mediaSize){
          // evitar el comportamiento predeterminado del clic de anclaje //
          event.preventDefault();
          const menuItemHasChildren = event.target.parentElement;
        // si menuItemHasChildren ya está expandido, contraerlo //
        if(menuItemHasChildren.classList.contains("active")){
            collapseSubMenu();
        }
        else{
          // collapse existing expanded menuItemHasChildren
          if(navMenu.querySelector(".menu-item-has-children.active")){
            collapseSubMenu();
          }
          // expand new menuItemHasChildren
          menuItemHasChildren.classList.add("active");
          const subMenu = menuItemHasChildren.querySelector(".sub-menu");
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
      }
  });
  function collapseSubMenu(){
      navMenu.querySelector(".menu-item-has-children.active .sub-menu")
      .removeAttribute("style");
      navMenu.querySelector(".menu-item-has-children.active")
      .classList.remove("active");
  }
  function resizeFix(){
       // if navMenu is open ,close it
       if(navMenu.classList.contains("open")){
           toggleNav();
       }
       // if menuItemHasChildren is expanded , collapse it
       if(navMenu.querySelector(".menu-item-has-children.active")){
            collapseSubMenu();
     }
  }

  window.addEventListener("resize", function(){
     if(innerWidth > mediaSize){
         resizeFix();
     }
  });

})();

  


