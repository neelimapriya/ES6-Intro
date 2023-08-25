const glass = {
  name: "glass",
  color: "golden",
  price: 12,
  isClean: true,
};

console.log(glass)

const keys=Object.keys(glass);
console.log(keys)
// [ 'name', 'color', 'price', 'isClean' ]

const values =Object.values(glass);
console.log(values)
// [ 'glass', 'golden', 12, true ]




const entries =Object.entries(glass);
console.log(entries);
// array of array or two dimensional array
// [
//   [ 'name', 'glass' ],
//   [ 'color', 'golden' ],
//   [ 'price', 500 ],
//   [ 'isClean', true ],
//   [ 'made', 'bangladesh' ]
// ]



delete glass.isClean;
console.log(glass)
// { name: 'glass', color: 'golden', price: 12 }


const {isClean,...sortGlass}=glass;
console.log(sortGlass)


// freeze
// Object.freeze(glass)
glass.made='bangladesh'
console.log(glass)
// { name: 'glass', color: 'golden', price: 12, isClean: true } freeze korle ar add hobena, update hobena, delete hobena

Object.seal(glass)
glass.price=500;
console.log(glass)
// {
//   name: 'glass',
//   color: 'golden',
//   price: 500,
//   isClean: true,
//   made: 'bangladesh'
// }





