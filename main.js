import data from './data/pokemon/pokemon.js';
import { filtrado, ordenarAlfab, barraBusqueda} from './data.js';


function mostrandoEnPantalla(pokemonesListos){
const pokemonEnPantalla1= document.getElementById('pokemonEnPantalla1');
//Creamos un for para obtener la imagen, el nombre y el numero de cada pokemon
for(let i = 0;i<pokemonesListos.length;i ++){
    let nombrePokemon = pokemonesListos[i]['name'].charAt(0).toUpperCase() + pokemonesListos[i]['name'].slice(1);
    let numPokemon = 'N.' + pokemonesListos[i]['num'];
    let tipoPokemon = 'Tipo:   ' + pokemonesListos[i]['type'].join(" / ");
    let debilidadPokemon = 'Debilidad:   ' + pokemonesListos[i]['weaknesses'].join(" / ");
    let urlImagen = pokemonesListos[i]['img'];
    let imagen = new Image (170,170);
    imagen.src = urlImagen; 

// Creamos un div para mostrar el nombre y el numero del pokémon en la card //
    let divNumero = document.createElement ('div');
    divNumero.innerHTML = numPokemon;
    let divNombre = document.createElement ('div');
    divNombre.innerHTML = nombrePokemon;
    let divTipo = document.createElement ('div');
    divTipo.innerHTML = tipoPokemon;
    let divDebilidad = document.createElement ('div');
    divDebilidad.innerHTML = debilidadPokemon;
    let nuevoDiv = document.createElement ('div');

// Usamos el classlist para darle una class a cada elemento de la tarjeta y manipular las propiedades desde css)
    divNumero.classList.add ('cardNumero')
    divNombre.classList.add ('cardNombre')
    imagen.classList.add ('cardImagen')
    divTipo.classList.add ('cardTipo');
    divDebilidad.classList.add ('cardDebilidad');
    nuevoDiv.classList.add ('card');

// Usamos el appendChild para mostrar el nombre y número en la card //
    nuevoDiv.appendChild (divNumero);  
    nuevoDiv.appendChild (imagen);  
    nuevoDiv.appendChild (divNombre);
    nuevoDiv.appendChild (divTipo);
    nuevoDiv.appendChild (divDebilidad);
    pokemonEnPantalla1.appendChild(nuevoDiv); 
   
}     
}
window.onload = mostrandoEnPantalla(data.pokemon);

//Funcion para ordenar por tipo de pokemon 

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

//Funcion para ordenar alfabeticamente A-Z Z-A

document.getElementById('lista').addEventListener('click',filtradoAscDes);

function filtradoAscDes(e) {
let ordenarAZ=e.target.dataset.pokemonorderid;
let az = ordenarAlfab(data.pokemon)
let za = ordenarAlfab(data.pokemon,ordenarAZ)
  if (ordenarAZ === 'asc') {
  document.getElementById('pokemonEnPantalla1').innerHTML=''
  mostrandoEnPantalla (az)
  }  else { 
  document.getElementById('pokemonEnPantalla1').innerHTML=''
  mostrandoEnPantalla (za)}
}
// Barra de busqueda 

document.getElementById('input').addEventListener('keyup', buscar);

function buscar () {
  let barraB = document.getElementById('input').value.toLowerCase(); 
  let textoIngresado = barraBusqueda(data.pokemon, barraB)
    if (barraB === ''){
    document.getElementById('pokemonEnPantalla1').innerHTML=''
    mostrandoEnPantalla (data.pokemon)
  } else {
    document.getElementById('pokemonEnPantalla1').innerHTML=''
    mostrandoEnPantalla (textoIngresado);
  }
} 

/*for(let i = 0;i<data.pokemon.length;i ++){
  let eggs = data.pokemon[i]['egg'];
  const filtrado = () => {
  let eggsdosk = eggs.filter(item => item.eggs.includes('2 km'));
  console.log(filtrado(eggsdosk))
}*/

let huevos= data.pokemon.filter(function(ele){
  return ele.egg == "2 km";
});
console.log(huevos);

let altura= data.pokemon.filter(function(ele){
  return ele.size.height > "0.3 m";
});
console.log(altura);

let sortNum = data.pokemon.map(function(ele){
 ele.size.weight = parseFloat(ele.size.weight) //el igual es para asignar un valor
 return (ele)
})
 console.log(sortNum)

let pesoPoke= data.pokemon.sort(function(a,b){
  let pesoNum= parseFloat(a.size.weight)
  let pesoNum1= parseFloat(b.size.weight)
  if (pesoNum > pesoNum1){
    return 1;
    }
    else {return -1}
})
console.log(pesoPoke);








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
          // contraer menuItemHasChildren 
          if(navMenu.querySelector(".menu-item-has-children.active")){
            collapseSubMenu();
          }
          // Expandir nuevo menuItemHasChildren
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
       // si navMenu esta abierto ,este se cierra
       if(navMenu.classList.contains("open")){
           toggleNav();
       }
       // si menuItemHasChildren se expande, colapsa
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

  


