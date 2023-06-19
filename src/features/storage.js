const numbers = [];
const stringy = '[]';
export const addToLocal = (todos) => {
  localStorage.setItem('data', JSON.stringify(todos));
}


export const getData = () => {
  const data = localStorage.getItem('data');
  return data === null ? [] : JSON.parse(data);
}