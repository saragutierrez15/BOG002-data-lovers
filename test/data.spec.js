import {filtrado,ordenarAlfab,barraBusqueda} from'../src/data.js';
const data2 = [{"num": "207","name": "forretress","type":["bug","steel"],"weaknesses":["fire"],},{"num": "208","name": "steelix","type":["steel","ground"],"weaknesses":["fire","water","fighting","ground"],},{"num": "212","name": "scizor","type":["bug","steel"],"weaknesses":["fire"],},{"num": "227","name": "skarmory","type":["steel","flying"],"weaknesses":["fire","electric"],},{"num": "001","name": "bulbasaur","type":["grass","poison"],"weaknesses":["fire","ice","flying","psychic"]}]
const tiposFiltrados = [{"num": "207","name": "forretress","type":["bug","steel"],"weaknesses":["fire"],},{"num": "208","name": "steelix","type":["steel","ground"],"weaknesses":["fire","water","fighting","ground"],},{"num": "212","name": "scizor","type":["bug","steel"],"weaknesses":["fire"],},{"num": "227","name": "skarmory","type":["steel","flying"],"weaknesses":["fire","electric"],},];
const tiposAlfab = [{"num": "001","name": "bulbasaur","type":["grass","poison"],"weaknesses":["fire","ice","flying","psychic"]},{"num": "207","name": "forretress","type":["bug","steel"],"weaknesses":["fire"],},{"num": "212","name": "scizor","type":["bug","steel"],"weaknesses":["fire"],},{"num": "227","name": "skarmory","type":["steel","flying"],"weaknesses":["fire","electric"],},{"num": "208","name": "steelix","type":["steel","ground"],"weaknesses":["fire","water","fighting","ground"],},] 
//primer test
describe('filtar por tipo', () => {
 it('is a function', () => {
  expect(typeof filtrado).toBe('function');
  });

  it('debería retornar "pokemones tipo acero" para la opción del menú con una condicion Acero', () => { 
      expect(filtrado(data2,'steel')).toEqual(tiposFiltrados);
  });
});
//segundo test
describe('Organizar alfabeticamente', () => {
  it('is a function', () => {
   expect(typeof ordenarAlfab).toBe('function');
   });
 
   it('debería retornar "pokemones en orden a-z" para la opción del menú con una condicion A-Z', () => { 
       expect(ordenarAlfab(data2)).toEqual(tiposAlfab);
   });
 });
 // tercer test 
 
 describe('Barra de busqueda', () => {
  it('is a function', () => {
   expect(typeof barraBusqueda).toBe('function');
   });
 
   it('debería retornar "Bulbasaur" para un input Bulbas', () => { 
       expect(barraBusqueda(data2,"bulbasaur")).toEqual(
        [{"num": "001","name": "bulbasaur","type":["grass","poison"],"weaknesses":["fire","ice","flying","psychic"]}] 
       );
   });
 });

