// write a arrow function that will take 3 parameters, will multiply the parameters and will return the result.
 const arrow =(x,y,z) =>{
   const multi= x*y*z;
   return multi;
 }
 console.log(arrow(2,3,4)) //24


//  write the following sentence in three lines and print the result: I am a web developer. i love to code. I love to eat biryani.
const sentence =` I am a web developer.
 i love to code. 
 I love to eat biryani.`
 console.log(sentence)


//  write an arrow function that will take parameters: One will come from you and the other parameter will be a default parameter. add these two parameter and return the result.

const Add =(num1, num2=0)=>{
    const sum =num1+num2;
    return sum;
}
console.log(5) //5



// write an arrow function where it will do the following:
// a) it wil take an array where the array elements will be the name of your friends.
// b) check if the length of each elements is even, push element with even length to a new array and return the result.

const friendsByEvenLength= (friendsArray)=>{
    const evenLengthFriends=[];

    for(const friend of friendsArray){
        if(friend.length % 2 ===0){
            evenLengthFriends.push(friend);
        }
    }
    return evenLengthFriends;
}


const friends= ['tamim', 'prova', 'samira', 'fahima', 'marayam']
const evenLengthFriends =friendsByEvenLength(friends);
console.log(evenLengthFriends)


// write an arrow function where it will do the following
//a) square each array element
//b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements

const arrayFunction =(numbers)=>{
   let sum=0;
    for(const num of numbers){
        const square =num**2;
        sum = sum+square
        
    }
    const average= sum/numbers.length;
    return average;
}
const number =[2,3,4,5]
const numbers =arrayFunction(number)
console.log(numbers)


// write an arrow function where it will do the following:
//a) It will take 2 array inputs
//b) Combine the 2 arrays and assign them in a new array
//c) Find the maximum number from the new array and return the result

const findMaxNumberFromArray =(arr1,arr2) =>{
    const combinedArray =[...arr1, ...arr2]
    const maxNumber =Math.max(...combinedArray)
    return maxNumber;
}

const array1 =[2,4,7,88]
const array2 =[4,6,9,1]
const findMax =findMaxNumberFromArray(array1,array2)
console.log(findMax)