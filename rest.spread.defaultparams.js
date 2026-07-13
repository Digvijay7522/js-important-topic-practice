// default params means default parameter values are the values that are used if no value or undefined is passed.
function greet(name,greeting='hello'){
    console.log(`${greeting} ${name}`)

}
greet("ravi",'hi')
greet("ravi") // here we are not passing greeting value so it will take default value 'hello'

// spread-------

// spread operator is used to expand the elements of an iterable object 
// like an array or string into individual elements. It is denoted by three dots (...).

const arr1=[1,2,3]
const arr2=[4,5,6]

const combinedArr=[...arr1,...arr2]
console.log(combinedArr) // [1,2,3,4,5,6]

const obj={
    name:'ravi',
    age:25


}
const obj2={
    ...obj,
    city:'delhi'
}
console.log(obj2) // {name:'ravi',age:25,city:'delhi'}

// Rest parameter--------

// rest parameter is used to represent an indefinite number of 
// arguments as an array. It is denoted by three dots (...).


    // actual use of rest parameter is that making tatal price 
    // of item beacase we do not know how many items will come