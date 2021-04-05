
export const filtrado = (data, condition) => {
  const todos=data.filter(item => item.type.includes (condition));
  return todos
  
}

export const example = () => {
  return 'example';
}; 

export const anotherExample = () => {
  return 'OMG';
};





