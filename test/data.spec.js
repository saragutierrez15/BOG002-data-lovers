import { example, anotherExample } from '../src/data.js';


describe('pokemon', () => {
  it('is a object', () => {
    expect(typeof example).toBe('object');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('filtrarNombres', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
