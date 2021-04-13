import {filtrado} from'../src/data.js';
import data from '../src/data/pokemon/pokemon.js';


const tiposFiltrados = [
  {
    "num": "207",
    "name": "forretress",
    "type": [
      "bug",
      "steel"
    ],
    "weaknesses": [
      "fire"
    ],
  },
  {
    "num": "208",
    "name": "steelix",
    "type": [
      "steel",
      "ground"
    ],
    "weaknesses": [
      "fire",
      "water",
      "fighting",
      "ground"
    ],
  },
  {
    "num": "212",
    "name": "scizor",
    "type": [
      "bug",
      "steel"
    ],
    "weaknesses": [
      "fire"
    ],
  },
  {
    "num": "227",
    "name": "skarmory",
    "type": [
      "steel",
      "flying"
    ],
    "weaknesses": [
      "fire",
      "electric"
    ],
  },
];


describe('filtar por tipo', () => {
 it('is a function', () => {
  expect(typeof filtrado).toBe('function');
  });

  it('debería retornar "tiposFiltrados" para la opción del menú con una condicion Acero', () => { 
      expect(filtrado(data,'steel')).toEqual(tiposFiltrados);
  });
});

/*it('returns `${filteredPokemons2} Poison`', () => {
  expect(filterPokemon(pokemonsDummyData, 'Poison')).toEqual(filteredPokemons2);
});*/

//describe('buscar por nombre', () => {
//  it('is a function', () => {
//   expect(typeof barraBusqueda).toBe('function');
//   })
//   it('returns `"num": "001","name": "bulbasaur"` for bulbasaur', () => {
//      expect(barraBusqueda(bulbasaur)).toBe('"num": "001","name": "bulbasaur"');
//      });
//    })  
// 
//
//  it('returns `example`', () => {
//    expect(example()).toBe('example');
//  });
//});
//
//
//describe('filtrado', () => {
//  it('is a function', () => {
//    expect(typeof filtrado).toBe('function');
//  });
//
//  it('returns `anotherExample`', () => {
//    expect(anotherExample()).toBe('OMG');
//  });
//});

//it('should return "Abra" for "asc" with click', () => {
//  expect(ordenarAlfab('', click)).toBe('Abra');
//})