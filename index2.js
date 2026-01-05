const usd=[20,30,40,50]

// function changePrice(price){
//     return price.map(e=>e*80)
// }

// console.log(changePrice(usd))

const changePrice=(price)=>price.map(e=>{
    return e*80})
console.log(changePrice(usd))