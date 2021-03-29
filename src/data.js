import data from './data/pokemon/pokemon.js';
const tiposPokemon = data.pokemon;
const TipoGrass = tiposPokemon.filter(item => item.type.includes ('grass'));
console.log (TipoGrass);

export const filtrado = (tiposPokemon) => {
  alert("Acción 1 pulsada");
}

export const example = () => {
  return 'example';
}; 

export const anotherExample = () => {
  return 'OMG';
};



//const tiposPokemon = data.pokemon;
////filtrado por tipo 
//const TipoGrass = tiposPokemon.filter(item => item.type.includes ('grass'));
//const TipoPoison = tiposPokemon.filter(item => item.type.includes ('poison'));
//const TipoFire = tiposPokemon.filter(item => item.type.includes ('fire'));
//const TipoFlying = tiposPokemon.filter(item => item.type.includes ('flying'));
//const TipoBug = tiposPokemon.filter(item => item.type.includes ('bug'));
//const TipoNormal = tiposPokemon.filter(item => item.type.includes ('normal'));
//const TipoElectric = tiposPokemon.filter(item => item.type.includes ('electric'));
//const TipoGround = tiposPokemon.filter(item => item.type.includes ('ground'));
//const TipoWater = tiposPokemon.filter(item => item.type.includes ('water'));
//const TipoFighting = tiposPokemon.filter(item => item.type.includes ('fighting'));
//const TipoPsychic = tiposPokemon.filter(item => item.type.includes ('psychic'));
//const TipoRock= tiposPokemon.filter(item => item.type.includes ('rock'));
//const TipoIce = tiposPokemon.filter(item => item.type.includes ('ice'));
//const TipoGhost = tiposPokemon.filter(item => item.type.includes ('ghost'));
//const TipoDragon = tiposPokemon.filter(item => item.type.includes ('dragon'));
//const TipoFairy = tiposPokemon.filter(item => item.type.includes ('fairy'));
//const TipoDark = tiposPokemon.filter(item => item.type.includes ('dark'));
//const TipoSteel = tiposPokemon.filter(item => item.type.includes ('steel'));
//console.log(TipoGrass);
//
//document.getElementById ('acero').addEventListener('click',console.log(TipoGrass));
//



