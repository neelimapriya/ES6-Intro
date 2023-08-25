const difference = (x, y) => x - y;
const multiply = (first, second, third) => first * second * third;


// single or one parameter
const getAge = (person) => person.age;
const student = { name: "antara", age: 45 };
const age = getAge(student);
console.log(age);

const getThird =Numbers => Numbers[2];
const third=getThird([5 , 9 , 3 , 4 , 6 , 45 , 44])
console.log(third)

const doubleIt =num =>num*2;

// no parameter
const getPI=() => Math.PI;
console.log(getPI())

// large arrow function.if you want to get anything returned from this function. then you have to use the return keyword
const doMath =(x,y,z) => {
    const sum =x+y+z;
    const mult =x*y*z;
    const result = sum +mult;
    return result;
}
