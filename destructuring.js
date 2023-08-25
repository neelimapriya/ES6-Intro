const singer = {
  name: "atif",
  age: 30,
  phone: "01847582364",
  money: 3245345,
};
// const phone=singer.phone;

// if right side is an object left side of destructuring will be object as well
// use property name as a variable that contains the property value
const { age, phone } = singer;
console.log(age);
console.log(phone);

// array destructuring
const number = [34, 53];
const [prothom, ditiyo] = number;
const [x, y] = [12, 43];
console.log(x);

// advance
function doubleThem(a, b) {
  return [a * 2, b * 2];
}
const [first, second] = doubleThem(6, 8);
console.log(first, second);
