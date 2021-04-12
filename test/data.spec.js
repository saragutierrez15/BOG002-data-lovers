import {filtrado, ordenarAlfab, barraBusqueda} from'../src/data.js';
import data from '../src/data/pokemon/pokemon.js';

const tiposPokemon = [{name: "forretress", num: "205", type: ["steel"]},{name: "steelix",num: "212",type:["steel"]},{name: "scizor",num: "227",type:["steel"]},{name: "skarmory",num: "208",type:["steel"]}]

  


describe('filtar por tipo', () => {
 it('is a function', () => {
  expect(typeof filtrado).toBe('function');
  });

  it('debería retornar "steel" para "la opción del menú" con una condicion Acero', () => { 
      expect(filtrado(data.pokemon, "steel")).toBe(tiposPokemon);
  });
});



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