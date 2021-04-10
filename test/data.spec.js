import {filtrado,ordenarAlfab} from'../src/data.js';
import data from '../src/data/pokemon/pokemon.js';


//describe('data', () => {
//
//  it('should be an object', () => {
//      expect(typeof data).toBe('object');
//  });
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

it('should return "Abra" for "asc" with click', () => {
  expect(ordenarAlfab('', click)).toBe('Abra');
});
