
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

  export const ordenarNum = (data) => {
  const ordenar2 = data.sort(function(a,b) {
  if (a.num > b.num){
  return -1;
  } else {
    return 1
  }
   })
  };
  
  export const barraBusqueda = (data,input) => {
    const caracterEncontrado  = []
    data.forEach(element => {
      if (element.name.toLowerCase().includes(input))
      caracterEncontrado.push(element);      
    });
    return caracterEncontrado; 
  }

    
 export const anotherExample = () => {
   return 'OMG';
 };

