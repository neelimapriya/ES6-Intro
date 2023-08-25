// for of use on array or string not in Object
// for in use in object

const num=[1,2,3,4,5,5];
for(let i=0; i<num.length; i++){
    console.log(num)
}



const numbers= [2,34,54,6,56];
for (const num of numbers){
    console.log(num)
}


const name='neelima sultana priya'
for(const char of name){
    console.log(char)
}



const glass = {
    name: "glass",
    color: "golden",
    price: 12,
    isClean: true,
  };
// object er jonno for in use korte hobe!
  for (const key in glass){
    const value =glass[key]
    // console.log(key)
    console.log(key, value)
  }


//   optional
const keys =Object.keys(glass);
console.log(keys) //[ 'name', 'color', 'price', 'isClean' ]

for (const key of keys){
    const value =glass[key];
    console.log(key,value)
}