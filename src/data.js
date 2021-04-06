
export const filtrado = (data, condition) => {
  const todos=data.filter(item => item.type.includes(condition));
  return todos
};
//intento Ginna
export const ordenar = (data,order) => {
  let dataOrdenada=data.sort(function(a,z){
    if(a.name > z.name) {return 1;}
    else {return -1;}
  })
  if(order === 'desc'){dataOrdenada.reverse()}
  return 'dataOrdenada';
}; 
//intento Sara
 export const ordenarAscDes =(data) => {
   const ordenarAlfab =data.pokemon.sort(function(anterior, siguiente) {
     if (anterior.name > siguiente.name){
    return 1;
     }
    if (anterior.name < siguiente.name)
    return -1; 
   }) 
     return ordenarAlfab
    }
  
  
export const anotherExample = () => {
  return 'OMG';
};







