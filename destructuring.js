// i am creating a new file for destructuring and i will add some code in it and i wiil do some other practices.


const data={
    name:'dig',
    age:39,
    address:{
        city:'delhi',
        state:'delhi'
    }   
}

// i can extract the data in different way using destructuring in js

const {name,age,address:{city,state}}=data
// console.log(name,age,city,state)

// if i want the data in array format then i can do it like this
// const [name,age,city,state] = [data.name, data.age, data.address.city, data.address.state];
// console.log([name,age,city,state]);

// now i am going to use dot and array method to extract the data from the object and array.
// by dot method

// console.log(data.name)
// console.log(data.age)
// console.log(data.address.city)
// console.log(data.address.state)
// // by array method
// console.log(data['name'])
// console.log(data['age'])
// console.log(data['address']['city'])
// console.log(data['address']['state'])

// now i am going to use for in loop to extract the data from the object and array.
//  for(let key in data){
//     if(typeof data[key]==='object' && data[key]!==null){
//         for(let innerkey in data[key]){
//             console.log(`${innerkey} is ${data[key][innerkey]}`)
//         }
//     }
//    else{
// console.log(`${key} is ${data[key]}`)
//    } 
// }

// now i am going to convert data key into json string 
// for(let key in data){
//     let value=typeof data[key]==='object' && data[key]!==null?JSON.stringify(data[key]):data[key]
//     console.log(`${key} is ${value}`)
// }

// now i am going to use for of loop to extract the data from the object.

// for(let key of Object.values(data)){
//     if(typeof data[key]==='object' && data[key]!==null){
//         for(let innerkey of Object.values(data[key])){
//             console.log(`${innerkey} is ${data[key][innerkey]}`)
//         }}

//     else
//         {
//         console.log(`${key} is ${data[key]}`)
//     }

// }

for(let [key,value] of Object.entries(data)){
    if(typeof value==='object' && value!==null){
        for(let [innerkey,innervalue] of Object.entries(value)){
            console.log(`${innerkey} is ${innervalue}`)
        }}

    else
        {
        console.log(`${key} is ${data[key]}`)
    }

}