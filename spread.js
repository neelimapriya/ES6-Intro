const max = Math.max(16, 23, 45, 45, 34, 56, 78);
const Numbers = [3, 4, 5, 6, 7, 4, 6, 7, 78, 89];
const arrayMax = Math.max(...Numbers);
// console.log(...Numbers);
console.log(arrayMax);


// use spread operator to copy
const friends = [4,3,5,6];
const bondhu =friends;
const dosto=[...friends] //copy
console.log(dosto)
bondhu.push(12);
console.log(dosto)
console.log(bondhu)
console.log(friends)

// advanced
const shonkkha =[...friends, 99] //add extra elements while copy
console.log(shonkkha)
 