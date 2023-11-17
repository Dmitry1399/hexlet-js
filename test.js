
const g = { a: 1, b: 2, c: 3 };
 
const q = (g) => {
  for (const get of g) {
console.log('12');
  }
 
 return get;
}
 console.log(q(g));