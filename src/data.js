
export const filtrado = (data, condition) => {
  const todos=data.filter(item => item.type.includes(condition));
  return todos
};
export const ordenarAlfab = (data, sortBy) => {
  const ordenar =data.sort(function(a,b) {
    if (a.name > b.name){
    return 1;
    }
    else {return -1}
    })
    if (sortBy === 'desc'){ordenar.reverse()}
  return ordenar
};
  
  export const barraBusqueda = (data, condition) => {
    const nombresBuscados =data.filter(item => item.name.includes(condition));
    return nombresBuscados
  };
  

    
 export const anotherExample = () => {
   return 'OMG';
 };

